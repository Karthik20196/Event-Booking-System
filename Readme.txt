# Event Booking System

This is a web-based Event Booking System developed using the MERN stack.
The application allows users to browse events, book tickets, and view their bookings.
Admin users can manage events and monitor bookings.

## Tech Stack
- Frontend: React.js (v18)
- Backend: Node.js (v18), Express.js
- Database: MongoDB Atlas
- Authentication: JWT

## Features
- User registration and login
- Browse available events
- Book events with date and ticket selection
- Seat availability validation
- View user booking history
- Admin view for all bookings
- Responsive user interface

## Project Setup (Local)

### Prerequisites
- Node.js v18+
- npm v9+
- MongoDB Atlas account

### Backend Setup
1. Navigate to backend folder
2. Install dependencies
   `npm install`
3. Create `.env` file with:
	PORT=5000
	MONGO_URI=
	JWT_SECRET=
4. Run backend
`npm run dev`

### Frontend Setup
1. Navigate to frontend folder
2. Install dependencies
`npm install`
3. Run frontend
`npm start`

Frontend runs on `http://localhost:3000`

## Future Enhancements
- Integration with Stripe/PayPal for real payments
- Email notifications for bookings
- Event reminders
