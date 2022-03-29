const router = require('express').Router();
const { User, Post, Comment } = require('../models');

//render homepage
router.get('/', async (req, res) => {
    try {
        const allPosts = await Post.findAll({
            attributes: ['id', 'title', 'content', 'created_at'],
            order: [['created_at', 'ASC']],
            include: [{
                model: User,
                attributes: ['username']
            },
            {
                model: Comment,
                attributes: ['id', 'text', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            }]
        });

        const posts = allPosts.map(post => post.get({ plain: true }));

        res.render('home', {
            posts,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

//login
router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
    }

    res.render('login');
});

//signup
router.get('/signup', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
    }

    res.render('signUp');
});

module.exports = router;