const { Word } = require('../models');

const wordData = [
    {
        word: 'LOL',
        definition: ' Laugh out loud',
        user_id: 1
    },
    {
        word:'LMAO',
        definition:'Laughing my ass off',
        user_id: 2
    },
    {
        word: 'Clapped',
        definition: 'You or the person refered to is ugly',
        user_id: 3
    },
    {
        word: 'No Cap',
        definition: 'a means of saying “no lie,” “no joke,” or “for real.',
        user_id: 4
    },
    {
        word: 'On God',
        definition:'I swear Im not lying',
        user_id: 5
    },
    {
        word: 'Lowkey',
        definition: 'a way of describing something that may be a mild feeling or desire',
        user_id: 1
    },
    {
        word: 'Highkey',
        definition: 'used to describe a strong desire, or something that is deserving of emphasis',
        user_id: 2
    },
    {
        word: 'Slaps',
        definition:'an adjective to describe something that is really good, amazing, or excellent',
        user_id: 3
    },
    {
        word:'Sus',
        definition: 'short for “suspicious” or “suspect',
        user_id: 4
    },
    {
        word: 'Lit',
        definition: 'Amazing, exciting, or cool',
        user_id: 5
    },
    {
        word: 'XRP',
        definition:'The best crypto currency',
        user_id: 1
    }
];

const seedWords = () => Word.bulkCreate(wordData);

module.exports = seedWords;