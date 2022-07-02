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

router.post('/', async (req, res) => {
    try {
        User.create(req.body).then((product) => {
            res.status(200).json(product);
        });
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;