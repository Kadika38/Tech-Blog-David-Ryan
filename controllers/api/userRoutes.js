const router = require('express').Router();
const { User, Post } = require('../../models');

//user get slash route returns all users
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

module.exports = router;