// app.js
const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes');
const databaseRoutes = require('./routes/databaseRoutes');

app.use(express.json()); // Parse JSON bodies
const cors = require('cors');
app.use(cors({ origin: 'http://localhost:3000', credentials: true })); // Update origin as needed

// Routes
app.use('/api/auth', authRoutes); // Authentication routes
app.use('/api/database', databaseRoutes); // Database management routes

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
