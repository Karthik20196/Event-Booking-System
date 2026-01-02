const Booking = require("../models/Booking");
const Event = require("../models/Event");

exports.bookEvent = async (req, res) => {
  try {
    const { eventId, eventDate, tickets } = req.body;

    const event = await Event.findById(eventId);
    if (!event)
      return res.status(404).json({ message: "Event not found" });

    // Check date availability
    const isDateAvailable = event.datesAvailable.some(
      (date) => new Date(date).toISOString() === new Date(eventDate).toISOString()
    );

    if (!isDateAvailable)
      return res.status(400).json({ message: "Selected date not available" });

    // Seat availability check
    if (event.bookedSeats + tickets > event.totalSeats)
      return res.status(400).json({ message: "Not enough seats available" });

    // Create booking
    const booking = await Booking.create({
      user: req.user.id,
      event: eventId,
      eventDate,
      tickets,
    });

    // Update booked seats
    event.bookedSeats += tickets;
    await event.save();

    res.status(201).json({
      message: "Booking successful",
      booking,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
exports.getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user.id })
      .populate("event")
      .sort({ createdAt: -1 });

    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find()
      .populate("user", "name email")
      .populate("event", "title")
      .sort({ createdAt: -1 });

    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

