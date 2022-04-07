const router = require('express').Router();
const sequelize = require('../config/connection');
const { Word, User } = require('../models');

// get all posts for homepage
router.get('/', (req, res) => {
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
router.get('/word/:id', (req, res) => { //are we grabbing words by id or by word?
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

module.exports = router;