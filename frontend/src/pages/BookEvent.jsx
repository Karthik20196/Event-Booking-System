import { useParams } from "react-router-dom";
import { useState } from "react";
import API from "../api";

export default function BookEvent() {
  const { id } = useParams();
  const [tickets, setTickets] = useState(1);
  const [date, setDate] = useState("");

  const book = async () => {
    await API.post("/bookings", {
      eventId: id,
      eventDate: date,
      tickets
    });
    alert("Booking Successful");
  };

  return (
    <div className="container" style={{ maxWidth: 400 }}>
      <h2>Book Event</h2>

      <label>Select Date</label>
      <input type="date" onChange={e => setDate(e.target.value)} />

      <label>Tickets</label>
      <input type="number" min="1" value={tickets}
        onChange={e => setTickets(e.target.value)} />

      <button onClick={book}>Confirm Booking</button>
    </div>
  );
}
