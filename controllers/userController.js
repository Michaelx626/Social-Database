const { User } = require('../models');

const headCount = async () => {
    User.aggregate()
    .count('friendCount')
    .then((numberOfFriends) => numberOfFriends);
};

module.exports = {
    getAllUsers(req, res){
        User.find({})
        .then(async (users) => {
            const usersObject = {
                users,
                friendCount: await headCount(),
            };
            return res.json(usersObject);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
    },
}
//     getSingleUser(req, res){
//         User.findOne({ _id: req.params.userId })
//             .select('-__v')
//             .then(async (user) =>
//             !user ? res.status(404).json({ message: 'No user with that ID' }) : res.json({ user, friends: await headCount(req.params.userId), })
//             )
//     }
// }