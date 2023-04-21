const router = require('express').Router();

const {
    getAllThoughts,
    getSingleThought,
    createThought,
    deleteThought,
    // addThought,
    // removeThought
} = require('../../controllers/userController');

router.route('/').get(getAllThoughts).post(createThought);

router.route('/:thoughtId').get(getSingleThought).delete(deleteThought);

// router.route('/:usertId/thought').post(addThought);

// router.route('/:userId/thought/:thoughtId').delete(removeThought);

module.exports = router;