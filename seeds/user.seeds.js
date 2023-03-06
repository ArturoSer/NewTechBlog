const { User } = require('../models');

const UserData = [
    {
        username: 'spongebob',
        password: 'ilovegary'
    },
    {
        username: 'squidward',
        password: 'ihatespongebob'
    },
    {
        username: 'mrkrabs',
        password: 'money'
    },
    {
        username: 'patrick',
        password: 'whatisapassword'
    },
    {
        username: 'sandy',
        password: 'karate'
    }
];

const seedUsers = () => User.bulkCreate(UserData, { individualHooks: true });

module.exports = seedUsers;