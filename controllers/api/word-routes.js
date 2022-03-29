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
router.get('/:id', (req, res) => {
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



module.exports = router;