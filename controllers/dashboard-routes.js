const router = require('express').Router();
const sequelize = require('../config/connection');
const { Word, User } = require('../models');
const withAuth = require('../utils/auth');

// get all posts for dashboard
router.get('/', withAuth, (req, res) => {
  console.log(req.session);

  Word.findAll({
    where: {
      user_id: req.session.user_id
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
      const words = dbWordData.map(word => word.get({ plain: true }));
      res.render('dashboard', { words, loggedIn: true });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/edit/word', withAuth, (req, res) => {
  Word.findByPk(req.params.word, {
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
      if (dbWordData) {
        const word = dbWordData.get({ plain: true });
        
        res.render('edit-word', {
          word,
          loggedIn: true
        });
      } else {
        res.status(404).end();
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
