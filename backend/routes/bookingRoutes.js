const express = require("express");
const router = express.Router();

const auth = require("../middleware/authMiddleware");
const admin = require("../middleware/adminMiddleware");

const {
  bookEvent,
  getMyBookings,
  getAllBookings,
} = require("../controllers/bookingController");

// User routes
router.post("/", auth, bookEvent);
router.get("/my", auth, getMyBookings);

// Admin route
router.get("/all", auth, admin, getAllBookings);

module.exports = router;
