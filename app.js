const express = require('express');
const app = express();
const path = require('path');

// Set up EJS as the template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware for static files
app.use(express.static(path.join(__dirname, 'public')));

// Import routes
const indexRoutes = require('./routes/index');
app.use('/', indexRoutes);

// Start the server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

// Start the server
const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0'; // Listen on all network interfaces
app.listen(PORT, HOST, () => console.log(`Server running on http://${HOST}:${PORT}`));