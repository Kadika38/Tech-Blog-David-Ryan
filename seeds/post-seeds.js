const { Post } = require('../models');

const postData = [
    {
        user_id: 1,
        headline: 'Im a test',
        content: 'This is just a test for test purposes only',
    },
    {
        user_id: 2,
        headline: 'Matt is tiny',
        content: 'Matt is a very small human.  Some even argue that he deserves the classification of sub-human',
    },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;