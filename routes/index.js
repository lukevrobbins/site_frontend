const express = require('express');
const router = express.Router();

// Homepage route
router.get('/', (req, res) => {
  res.render('index', { title: 'My Resume' });
});

// Additional routes can go here (e.g., About Me, Projects, etc.)
router.get('/about', (req, res) => {
  res.render('about', { title: 'About Me' });
});

router.get('/projects', (req, res) => {
  res.render('projects', { title: 'Projects' });
});


module.exports = router;
