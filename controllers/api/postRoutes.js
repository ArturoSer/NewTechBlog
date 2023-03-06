const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/authorization');

router.get('/', withAuth, (req, res) => {
   Post.create({
    title: req.body.title,
    body: req.body.body,
    user_id: req.session.user_id
   })
   .then(postData => {
    res.json(postData);
   })
   .catch(err => {
    res.status(500).json(err);
   });
});

router.put('/:id', withAuth, (req, res) => {
    Post.update({
        title: req.body.title,
        body: req.body.body
    },
    {
        where: {
            id: req.params.id
        }
    }
    )
    .then(postData => {
        if(!postData) {
            res.status(404).json({ message: 'No post found with this ID!!' });
            return;
        }
        res.json(postData);
    })
    .catch(err => {
        res.status(500).json(err);
    });
    });

    router.delete('/:id', withAuth, (req, res) => {
        Post.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(postData => {
            if(!postData) {
                res.status(404).json({ message: 'No post found with this ID!!' });
                return;
            }
            res.json(postData);
        })
            .catch(err => {
                res.status(500).json(err);
            });
        });

module.exports = router;