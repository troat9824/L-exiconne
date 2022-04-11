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
router.get('/:word', (req, res) => {
    Word.findOne({
        where: {
            word: req.params.word 
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
    // Expects { word: 'tintinabulation', definition: 'the sound of ringing bells', user_id: 1 }
    Word.create({
        word: req.body.word,
        definition: req.body.definition,
        //user_id: req.body.user_id
    })
    .then(dbWordData => res.json(dbWordData))
    .catch(err => {
        console.log(err);
        res.json(500).json(err);
    });
});

router.put('/:id', (req, res) => { //again, should we search by word? Depends if the button is attached to the entry <card>
    Word.update(req.body,
        /*{
            word: req.params.word
        },
        {
            definition: req.params.definition
        },*/
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