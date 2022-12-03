const knex = require("knex")(require("../knexfile"));

exports.addNewUser = (req, res) => {
  knex("users")
    .insert(req.body)
    .then((newUserId) => {
      res.status(201).json(newUserId[0]);
    })
    .catch(() => {
      res.status(400).json({
        message: `Error Adding User`,
      });
    });
};
