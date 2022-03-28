const router = require('express').Router();
const { User, Post, Comment } = require('../../models');

//get all users
router.get('/', async (req, res) => {
    try {
        const userData = await User.findAll({ attributes: { exclude: ['password']} });

        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});

//get user by id
router.get('/:id', async (req, res) => {
    try {
        const singleUserData = await User.findOne({
            attributes: { 
                exclude: ['password'] 
            },
            where: {
                id: req.params.id
            },
            include: [{
                model: Post,
                attributes: ['id', 'title', 'content', 'created_at'],
            },
            {
                model: Comment,
                attributes: ['id', 'text', 'created_at'],
                include: {
                    model: Post,
                    attributes: ['title']
                }
            }]
        });

        if (!singleUserData) {
            res
            .status(400)
            .json({ message: 'No user found'});
        }

        res.status(200).json(singleUserData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;