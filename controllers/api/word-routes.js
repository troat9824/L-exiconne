const router = require('express').Router();
const Word = require('../../models/Word.js');
const sequelize = require('../../config/connection');

// get all words
router.get('/', (req, res) => {
    Word.findAll({
        attributes: [
            'id',
            'word',
            'definition',
            'user_id',
            'created_at'
        ]
    })
    .then(dbWordData => res.json(dbWordData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// get one word
router.get('/:word', (req, res) => { //should this be '/:word'?
    Word.findOne({
        where: {
            word: req.params.word //is this right? Since we aren't searching by id #?
        },
        attributes: [
            'id',
            'word',
            'definition',
            'user_id',
            'created_at'
        ]
    })
    .then(dbWordData => {
        if (!dbWordData) {
            res.status(404).json({ message: "No entry found!" });
            return;
        }
        res.json(dbWordData);
    });
});

router.post('/', (req, res) => {
    // Expects { word: 'tintinabulation', definition: 'the sound of ringing bells' }
    Word.create({
        word: req.body.word,
        definition: req.body.definition
    })
    .then(dbWordData => res.json(dbWordData))
    .catch(err => {
        console.log(err);
        res.json(500).json(err);
    });
});

router.put('/:id', (req, res) => { //again, should we search by word? Depends if the button is attached to the entry <card>
    Word.update(
        {
            word: req.params.word
        },
        {
            definition: req.params.definition
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
    .then(dbWordData => {
        if (!dbWordData) {
            res.status(404).json({ message: 'No entry found!' });
            return;
        }
        res.json(dbWordData);
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
    Word.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbWordData => {
        if (!dbWordData) {
            res.status(404).json({ message: 'No entry found!' });
            return;
        }
        res.json(dbWordData);
    })
    .catch(err => {
        res.status(500).json(err);
    });
});



module.exports = router;