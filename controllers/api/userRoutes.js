const router = require('express').Router();
const { User, Post } = require('../../models');

//user get slash route returns all users (just used for testing, actually not used for website)
router.get('/', async (req, res) => {
    try {
        const allUserData = await User.findAll({
            include: [{ model: Post }],
        });
        res.status(200).json(allUserData);
    } catch (err) {
        res.status(500).json(err);
    }
});

//post route for creating new users
router.post('/', async (req, res) => {
    /* body example:
    {
        "username": "example_username",
        "password": "example_password"
    } */
    try {
        User.create(req.body).then((user) => {
            res.status(200).json(user);
        });
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;