const { Post } = require('../models');

const postData = [
    {
        title: 'Post 1',
        body: 'This is a post for 1',
        user_id: 5
    },
    {
        title: 'Post 2',
        body: 'This is a post for 2',
        user_id: 3
    },
    {
        title: 'Post 3',
        body: 'This is a post for 3',
        user_id: 1
    },
    {
        title: 'Post 4',
        body: 'This is a post for 4',
        user_id: 2
    },
    {
        title: 'Post 5',
        body: 'This is a post for 5',
        user_id: 4
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;