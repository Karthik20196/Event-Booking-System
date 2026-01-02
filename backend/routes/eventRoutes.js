const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const admin = require("../middleware/adminMiddleware");
const {
  createEvent,
  getEvents,
} = require("../controllers/eventController");

router.post("/", auth, admin, createEvent); // Admin only
router.get("/", getEvents); // Public

module.exports = router;
