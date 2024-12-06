// databaseRoutes.js
const express = require('express');
const {
  createDatabase,
  listDatabases,
  executeQueryOnDatabase,
} = require('../controllers/databaseController');
const { authenticateUser } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/create', authenticateUser, createDatabase); // Create a new database
router.get('/list', authenticateUser, listDatabases); // List all user databases
router.post('/query', authenticateUser, executeQueryOnDatabase); // Execute query on a specific database

module.exports = router;
