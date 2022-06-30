const { User } = require('../models');

const userData = [
    {
        username: 'ninjakadika',
        password: 'imatestpass',
    },
    {
        username: 'sirkittensfists',
        password: 'mattistiny',
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;