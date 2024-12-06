// databaseController.js

const { Pool } = require('pg');
const pool = require('../config/db'); // Main database connection
require('dotenv').config();

// Function to validate database names
const validateDatabaseName = (dbName) => /^[a-zA-Z_][a-zA-Z0-9_]*$/.test(dbName);

// Create a new database for the user
const createDatabase = async (req, res) => {
  const { dbName } = req.body;

  try {
    // Validate database name
    if (!validateDatabaseName(dbName)) {
      return res.status(400).json({ error: 'Invalid database name' });
    }

    // Check if the database  for the user
    const existingDb = await pool.query(
      'SELECT * FROM user_databases WHERE user_id = $1 AND db_name = $2',
      [req.user.id, dbName]
    );
    if (existingDb.rows.length > 0) {
      return res.status(400).json({ error: `Database "${dbName}" already exists` });
    }

    // Create the new database
    await pool.query(`CREATE DATABASE "${dbName}"`);

    // Save the new database info in the user_databases table
    await pool.query(
      'INSERT INTO user_databases (user_id, db_name) VALUES ($1, $2)',
      [req.user.id, dbName]
    );

    res.status(201).json({ message: `Database "${dbName}" created successfully!` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error creating database' });
  }
};

// List all databases created by the user
const listDatabases = async (req, res) => {
  try {
    const result = await pool.query('SELECT db_name FROM user_databases WHERE user_id = $1', [
      req.user.id,
    ]);
    res.status(200).json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching databases' });
  }
};

// Connect to a specific user database and execute a query
const executeQueryOnDatabase = async (req, res) => {
  const { dbName, query } = req.body;

  try {
    // Validate database name
    if (!validateDatabaseName(dbName)) {
      return res.status(400).json({ error: 'Invalid database name' });
    }

    // Create a dynamic connection to the user database
    const dbPool = new Pool({
      user: process.env.DB_USER,
      host: process.env.DB_HOST,
      database: dbName, // Use the database specified by the user
      password: process.env.DB_PASSWORD,
      port: process.env.DB_PORT,
    });

    // Execute the query
    const result = await dbPool.query(query);
    dbPool.end(); // Close the connection pool

    res.status(200).json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error executing query' });
  }
};

module.exports = { createDatabase, listDatabases, executeQueryOnDatabase };
