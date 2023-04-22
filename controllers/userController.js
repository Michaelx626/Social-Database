const { User } = require("../models");

const headCount = async () => {
  User.aggregate()
    .count("friendCount")
    .then((numberOfFriends) => numberOfFriends);
};

module.exports = {
  getAllUsers(req, res) {
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

  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .then(async (user) =>
        !user
          ? res.status(404).json({ message: "No user with that ID" })
          : res.json({ user })
      );
  },

  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },

  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with this id!' })
          : res.json(user)
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  deleteUser(req, res) {
    User.findOneAndRemove({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No such user exists" })
          : res.json({ user, new: true })
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

//   addThought(req, res) {
//     console.log("You are adding a thought");
//     console.log(req.body);
//     User.findOneAndUpdate(
//       { _id: req.params.userId },
//       { $addToSet: { thoughts: req.body } },
//       { runValidators: true, new: true }
//     )
//       .then((user) =>
//         !user
//           ? res
//               .status(404)
//               .json({ message: "No user found with that ID :(" })
//           : res.json(user)
//       )
//       .catch((err) => res.status(500).json(err));
//   },

//   removeThought(req, res) {
//     User.findOneAndUpdate(
//       { _id: req.params.userId },
//       { $pull: { thought: { thoughtId: req.params.thoughtId } } },
//       { runValidators: true, new: true }
//     )
//       .then((user) =>
//         !user
//           ? res
//               .status(404)
//               .json({ message: "No user found with that ID :(" })
//           : res.json(user)
//       )
//       .catch((err) => res.status(500).json(err));
//   },
};
