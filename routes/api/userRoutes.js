const router = require('express').Router();

const {
    getAllUsers,
    getSingleUser,
    createUser,
    deleteUser,
    updateUser,
    addThought,
    removeThought,
    // createFriend,
    // deleteFriend
} = require('../../controllers/userController');

router.route('/').get(getAllUsers).post(createUser);

router.route('/:userId').get(getSingleUser).delete(deleteUser).put(updateUser);

router.route('/:userId/thought').post(addThought);

router.route('/:userId/thought/:thoughtId').delete(removeThought);

// router.route('/:userId/friends').post(createFriend)

// router.route('/:userId/friends/:friendsId').delete(deleteFriend)

module.exports = router;