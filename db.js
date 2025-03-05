// db.js
const sql = require('mssql');
require('dotenv').config();

const config = {
  server: process.env.SQL_SERVER,
  database: process.env.SQL_DATABASE,
  user: process.env.SQL_USER,
  password: process.env.SQL_PASSWORD,
  options: {
    encrypt: true, // For Azure
    trustServerCertificate: false // Change to true for local dev / self-signed certs
  }
};

async function connectToDatabase() {
  try {
    const pool = await sql.connect(config);
    console.log('Connected to Azure SQL Database');
    return pool;
  } catch (err) {
    console.error('Database connection error:', err);
    throw err;
  }
}

module.exports = {
  connectToDatabase,
  sql
};