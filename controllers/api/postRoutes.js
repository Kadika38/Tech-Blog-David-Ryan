const router = require('express').Router();
const { User, Post } = require('../../models');

//post get slash route returns all posts
router.get('/', async (req, res) => {
    try {
        const allPostData = await Post.findAll();
        res.status(200).json(allPostData);
    } catch (err) {
        res.status(500).json(err);
    }
});

//post get by id route returns all posts by a specific user
router.get('/:id', async (req, res) => {
    try {
        const postData = await Post.findAll({
            where: {
                user_id: req.params.id
            }
        });
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
})

//post post route for creating new posts
router.post('/', async (req, res) => {
    try {
        Post.create(req.body).then((post) => {
            res.status(200).json(post);
        });
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;