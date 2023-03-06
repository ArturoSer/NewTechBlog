const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/authorization');

router.get('/', (req, res) => {
    Comment.findAll({})
    .then(commentData => res.json(commentData))
    .catch(err => {
        res.status(500).json(err);
    });
});

router.post('/', withAuth, (req, res) => {
        Comment.create({
            comment_text: req.body.comment_text,
            post_id: req.body.post_id,
            user_id: req.session.user_id,
        })
        .then(commentData => {
            res.json(commentData);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});


module.exports = router;