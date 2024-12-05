// authRoutes.js

const express = require('express');
const { login, register } = require('../controllers/authController'); // Ensure these are properly exported
const router = express.Router();

router.post('/login', login);
router.post('/register', register);

module.exports = router;
