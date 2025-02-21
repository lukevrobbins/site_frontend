require('dotenv').config();

const express = require('express');
const app = express();
const path = require('path');
const env = process.env.NODE_ENV;
const PORT = process.env.PORT || 3000;


// Set up EJS as the template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware for static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Import routes
const indexRoutes = require('./routes/index');
app.use('/', indexRoutes);

const projectRoutes = require('./routes/projects');
app.use('/projects/', projectRoutes);

const apiRoutes = require('./routes/api');
app.use('/api/', apiRoutes);

// Start the server
const HOST = env === 'development' ? 'localhost' : '0.0.0.0';
app.listen(PORT, HOST, () => console.log(`Server running on http://${HOST}:${PORT}`));