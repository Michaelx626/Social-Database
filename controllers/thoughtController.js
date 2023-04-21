const { Thought } = require("../models");

module.exports = {
  getAllThoughts(req, res) {
    Thought.find({})
      .then(async (thoughts) => {
        res.json(thoughts);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId }).then(async (thought) =>
      !thought
        ? res.status(404).json({ message: "No thought with that ID" })
        : res.json({ thought })
    );
  },

  createThought(req, res) {
    Thought.create(req.body)
      .then((thought) => res.json(thought))
      .catch((err) => res.status(500).json(err));
  },

  deleteThought(req, res) {
    Thought.findOneAndRemove({ _id: req.params.thoughtId })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No such thought exists" })
          : res.json({ thought, new: true })
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
};
