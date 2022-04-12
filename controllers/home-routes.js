const router = require('express').Router();
const sequelize = require('../config/connection');
const { Word, User } = require('../models');
const withAuth = require('../utils/auth');

// get all posts for homepage
router.get('/', withAuth, (req, res) => {
  console.log('======================');
  Word.findAll({
    attributes: [
      'id',
      'word',
      'definition',
      'user_id',
      'created_at',
    ],
    include: [
        {
          model: User,
          attributes: ['username']
        }
    ]
  })
    .then(dbWordData => {
      const words = dbWordData.map(word => word.get({ plain: true })); //should 'post' be 'word'?

      res.render('homepage', {
        words,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get single post
router.get('/word/:word', withAuth, (req, res) => {
  Word.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
        'id',
        'word',
        'definition',
        'user_id',
        'created_at',
    ],
    include: [
        {
          model: User,
          attributes: ['username']
        }
    ]
  })
    .then(dbWordData => {
      if (!dbWordData) {
        res.status(404).json({ message: 'No entry found!' });
        return;
      }

      const word = dbWordData.get({ plain: true });

      res.render('single-word', {
        word,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

// logout
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  }
  else {
    res.status(404).end();
  }
});


module.exports = router;
