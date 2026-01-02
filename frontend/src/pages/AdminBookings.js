import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/bookings/all", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => setBookings(res.data));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>All Bookings (Admin)</h2>

      {bookings.map((b) => (
        <div
          key={b._id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <p><b>User:</b> {b.user?.name} ({b.user?.email})</p>
          <p><b>Event:</b> {b.event?.title}</p>
          <p><b>Tickets:</b> {b.tickets}</p>
          <p><b>Status:</b> {b.paymentStatus}</p>
        </div>
      ))}
    </div>
  );
}
