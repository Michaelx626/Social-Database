const router = require('express').Router();

const {
    getAllUsers,
    getSingleUser,
    createUser,
    deleteUser,
    addThought,
    removeThought
} = require('../../controllers/userController');

router.route('/').get(getAllUsers).post(createUser);

router.route('/:userId').get(getSingleUser).delete(deleteUser);

router.route('/:usertId/thought').post(addThought);

router.route('/:userId/thought/:thoughtId').delete(removeThought);

module.exports = router;