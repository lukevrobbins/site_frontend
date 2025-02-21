const express = require('express');
const router = express.Router();

// Homepage route
router.get('/', (req, res) => {
  res.render('index', { title: 'Luke Robbins | Machine Learning Engineer' });
});

// Additional routes can go here (e.g., About Me, Projects, etc.)
router.get('/about', (req, res) => {
  res.render('about', { title: 'About Me' });
});


module.exports = router;
