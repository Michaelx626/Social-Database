const router = require('express').Router();

const {
    getAllUsers
} = require('../../controllers/userController');

router.route('/').get(getAllUsers).post()

module.exports = router;