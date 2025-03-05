// routes/database.js
const express = require('express');
const router = express.Router();
const { connectToDatabase, sql } = require('../db');

// Fetch all books
router.get('/', async (req, res) => {
  try {
    const pool = await connectToDatabase();
    const result = await pool.request().query('SELECT * FROM books');
    
    res.render('database/books', { 
      title: 'Database Books',
      books: result.recordset 
    });
  } catch (err) {
    console.error('Error fetching books:', err);
    res.status(500).render('error', { 
      title: 'Database Error',
      message: 'Failed to retrieve books from the database',
      error: err
    });
  }
});

// Test connection
router.get('/test', async (req, res) => {
  try {
    await connectToDatabase();
    res.render('database/test', { 
      title: 'Database Connection Test',
      status: 'Success',
      message: 'Successfully connected to Azure SQL Database'
    });
  } catch (err) {
    res.render('database/test', { 
      title: 'Database Connection Test',
      status: 'Failed',
      message: 'Failed to connect to Azure SQL Database',
      error: err.message
    });
  }
});

module.exports = router;