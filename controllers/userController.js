const { User } = require('../models');

module.exports = {
    getAllUsers(req, res) {
        User.find()
        .then(async (users) => {
           res.json(users)
        })
    },
    newUserMethod(req, res) {
        User.create(req.body)
        .then(async(newUser) => {
            res.json("created a new user")
        })
    }
}