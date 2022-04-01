const User = require('./User');
const Word = require('./Word');

//create associations

User.hasMany(Word, {
    foreignKey: 'user_id'
});

Word.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Word };