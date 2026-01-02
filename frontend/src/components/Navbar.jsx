import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div
      style={{
        background: "#111827",
        padding: "14px 24px",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h3>Event Booking</h3>

      <div>
        <Link to="/" style={{ marginRight: 15 }}>
          Events
        </Link>

        {token && (
          <>
            <Link to="/my-bookings" style={{ marginRight: 15 }}>
              My Bookings
            </Link>

            <Link to="/admin/bookings" style={{ marginRight: 15 }}>
              Admin
            </Link>

            <button
              onClick={logout}
              style={{
                background: "#ef4444",
                padding: "6px 12px",
                borderRadius: "6px",
              }}
            >
              Logout
            </button>
          </>
        )}

        {!token && (
          <>
            <Link to="/login" style={{ marginRight: 15 }}>
              Login
            </Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </div>
  );
}
