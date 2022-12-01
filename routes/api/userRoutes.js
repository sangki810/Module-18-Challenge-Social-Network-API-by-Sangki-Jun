const router = require('express').Router();

const {
    getAllUsers,
    newUserMethod,
} = require('../../controllers/userController');

router.route('/').get(getAllUsers).post(newUserMethod)

// router.route("/:userId").delet 

module.exports = router;