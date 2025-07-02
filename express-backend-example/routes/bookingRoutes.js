const express = require("express")
const router = express.Router()
const { createBooking } = require("../controllers/bookingController")
// const { protect } = require('../middleware/authMiddleware'); // Uncomment if booking requires login

router.post("/", createBooking) // Or router.post('/', protect, createBooking);

module.exports = router
