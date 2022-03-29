const router = require('express').Router();
const Entry = require('../../models/Word.js');
const sequelize = require('../../config/connection');

// get all words
router.get('/', (req, res) => {
    Entry.findAll({
        attributes: [
            'id',
            'word',
            'definition',
            'created_at'
        ]
    })
    .then(dbEntryData => res.json(dbEntryData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// get one word
router.get('/:id', (req, res) => { //should this be '/:word'?
    Entry.findOne({
        where: {
            id: req.params.word //is this right? Since we aren't searching by id #?
        },
        attributes: [
            'id',
            'word',
            'definition',
            'created_at'
        ]
    })
    .then(dbEntryData => {
        if (!dbEntryData) {
            res.status(404).json({ message: "No entry found!" });
            return;
        }
        res.json(dbEntryData);
    });
});

router.post('/', (req, res) => {
    // Expects { word: 'tintinabulation', definition: 'the sound of ringing bells' }
    Entry.create({
        word: req.body.word,
        definition: req.body.definition
    })
    .then(dbEntryData => res.json(dbEntryData))
    .catch(err => {
        console.log(err);
        res.json(500).json(err);
    });
});

router.put('/:id', (req, res) => { //again, should we search by word? Depends if the button is attached to the entry <card>
    Entry.update(
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
    .then(dbEntryData => {
        if (!dbEntryData) {
            res.status(404).json({ message: 'No entry found!' });
            return;
        }
        res.json(dbEntryData);
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
    Entry.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbEntryData => {
        if (!dbEntryData) {
            res.status(404).json({ message: 'No entry found!' });
            return;
        }
        res.json(dbEntryData);
    })
    .catch(err => {
        res.status(500).json(err);
    });
});



module.exports = router;