// routes/reading.js
const express = require('express');
const router = express.Router();

// Books route
router.get('/books', (req, res) => {
  res.render('reading/books', { 
    title: 'Recent Books | Luke Robbins',
    books: [
      {
        title: 'Deep Learning',
        author: 'Ian Goodfellow, Yoshua Bengio, and Aaron Courville',
        description: 'A comprehensive textbook on deep learning fundamentals.',
        link: 'https://www.deeplearningbook.org/'
      },
      {
        title: 'Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow',
        author: 'Aurélien Géron',
        description: 'Practical guide to implementing machine learning solutions.',
        link: '#'
      },
      {
        title: 'The Pragmatic Programmer',
        author: 'David Thomas and Andrew Hunt',
        description: 'A collection of software development wisdom and best practices.',
        link: '#'
      }
    ]
  });
});

// Papers route
router.get('/papers', (req, res) => {
  res.render('reading/papers', { 
    title: 'Recent Papers | Luke Robbins',
    papers: [
      {
        title: 'Attention Is All You Need',
        authors: 'Vaswani et al.',
        venue: 'NeurIPS 2017',
        description: 'Introduces the transformer architecture, fundamental to modern NLP models.',
        link: 'https://arxiv.org/abs/1706.03762'
      },
      {
        title: 'BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding',
        authors: 'Devlin et al.',
        venue: 'NAACL 2019',
        description: 'Presents BERT, a breakthrough language representation model.',
        link: 'https://arxiv.org/abs/1810.04805'
      },
      {
        title: 'An Image is Worth 16x16 Words: Transformers for Image Recognition at Scale',
        authors: 'Dosovitskiy et al.',
        venue: 'ICLR 2021',
        description: 'Introduces Vision Transformer (ViT) for computer vision tasks.',
        link: 'https://arxiv.org/abs/2010.11929'
      }
    ]
  });
});

// Articles route
router.get('/articles', (req, res) => {
  res.render('reading/articles', { 
    title: 'Recent Articles | Luke Robbins',
    articles: [
      {
        title: 'The Illustrated Transformer',
        author: 'Jay Alammar',
        source: 'jalammar.github.io',
        description: 'Visual guide to understanding the transformer architecture.',
        link: 'https://jalammar.github.io/illustrated-transformer/'
      },
      {
        title: 'A Visual Guide to Using BERT for the First Time',
        author: 'Jay Alammar',
        source: 'jalammar.github.io',
        description: 'Intuitive explanation of BERT and how to use it.',
        link: 'https://jalammar.github.io/a-visual-guide-to-using-bert-for-the-first-time/'
      },
      {
        title: 'Understanding Azure Machine Learning Service',
        author: 'Microsoft',
        source: 'Microsoft Learn',
        description: 'Overview of Azure ML capabilities and use cases.',
        link: '#'
      }
    ]
  });
});

module.exports = router;