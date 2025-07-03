// Load environment variables from .env file
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// --- App Initialization ---
const app = express();
const PORT = process.env.PORT || 5001;

// --- Middleware ---
// Enable Cross-Origin Resource Sharing for your Netlify frontend
const corsOptions = {
  origin: process.env.FRONTEND_URL || 'http://localhost:3000' // Your Netlify URL will go in .env
};
app.use(cors(corsOptions));

// Enable Express to parse JSON in request bodies
app.use(express.json());


// --- Database Connection ---
// As per the blueprint, we use MongoDB. Mongoose is a library that makes it easier to work with.
mongoose.connect(process.env.DATABASE_URL)
  .then(() => console.log('MongoDB connected successfully.'))
  .catch(err => console.error('MongoDB connection error:', err));


// --- API Routes ---
// This is a placeholder for now. We will create this file next.
// app.use('/api/auth', require('./routes/authRoutes'));


app.get('/', (req, res) => {
    res.send('Ephaptic Coupling Backend is running...');
});


// --- Server Startup ---
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
