const { Word } = require('../models');

const wordData = [

    {
        word:'tintinabulation',
        definition:'the sound of the ringing of bells',
        user_id: 2
    },
    {
        word: 'floccinoccinihilipilification',
        definition: 'the act of declaring something is worthless',
        user_id: 3
    },
    {
        word: 'mezzo',
        definition: 'medium',
        user_id: 4
    },
    {
        word: 'anthurium',
        definition:'an aroid with large, plasticky infloresences',
        user_id: 5
    },
    {
        word: 'glitter',
        definition: 'the physical manifestation of dreams',
        user_id: 1
    },
    {
        word: 'ovine',
        definition: 'pertaining to sheep',
        user_id: 2
    },
    {
        word: 'chemolithoautotroph',
        definition:'these little pseudo-bacteria that live off of rock in the crust of the Earth',
        user_id: 3
    },
    {
        word:'terkw-',
        definition: 'Proto-Indo-European root for turn',
        user_id: 4
    },
    {
        word: 'ballsy',
        definition: 'risky, brave, confident',
        user_id: 5
    },
    {
        word: 'kriechenden Schnecken',
        definition:'German for creeping snails',
        user_id: 1
    }
];

const seedWords = () => Word.bulkCreate(wordData);

module.exports = seedWords;