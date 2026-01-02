import { useEffect, useState } from "react";
import API from "../api";

export default function MyBookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await API.get("/bookings/my");
        setBookings(res.data);
      } catch (err) {
        setError("Failed to load bookings");
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div className="container">
      <h2>My Bookings</h2>

      {loading && <p>Loading bookings...</p>}

      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading && bookings.length === 0 && (
        <p>No bookings found</p>
      )}

      {bookings.map((b) => (
        <div
          key={b._id}
          style={{
            background: "white",
            padding: "16px",
            marginBottom: "12px",
            borderRadius: "10px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
          }}
        >
          <h3>{b.event.title}</h3>
          <p><b>Date:</b> {b.eventDate.slice(0, 10)}</p>
          <p><b>Tickets:</b> {b.tickets}</p>
          <p>
            <b>Status:</b>{" "}
            <span
              style={{
                color: b.paymentStatus === "paid" ? "green" : "orange",
                fontWeight: "bold",
              }}
            >
              {b.paymentStatus}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
}
