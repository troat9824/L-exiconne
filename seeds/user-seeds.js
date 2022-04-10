const { User } = require('../models');

const userData = [
    {
        username: 'billyBoy8',
        email: 'werty@gmail.com',
        password: 'password09876'
    },
    {
        username: 'chumBucket97',
        email: 'bnmasdf@gmail.com',
        password: 'password09876'
    },
    {
        username: 'scurvysmurf',
        email: 'asouidvnorj@gmail.com',
        password: 'password09876'
    },
    {
        username: 'heau-meau',
        email: 'cutie@gmail.com',
        password: 'password09876'
    },
    {
        username: 'mountainLady',
        email: 'peaks@gmail.com',
        password: 'password09876'
    },
];

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUsers;