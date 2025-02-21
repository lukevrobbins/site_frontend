const express = require('express');
const router = express.Router();

const projectTemplates = {
    '1': 'project_pages/project_1',
    '2': 'project_pages/project_2',
    'chat_bot': 'project_pages/chat_bot',
  };

router.get('/', (req, res) => {
  res.render('projects', { title: 'Projects' });
});

router.get('/:id', (req, res) => {
    const projectId = req.params.id;
    const template = projectTemplates[projectId];
    console.log(template);
  
    if (template) {
      res.render(template, { projectId });
    } else {
      // Optionally render a default template or a 404 page if not found
      res.render('single_project_page', { projectId });
    }
  });
module.exports = router;
