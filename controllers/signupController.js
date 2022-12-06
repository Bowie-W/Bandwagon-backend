require("dotenv").config();
const knex = require("knex")(require("../knexfile"));
const jwt = require("jsonwebtoken");
const { secretkey } = process.env;

exports.addNewUser = (req, res) => {
  knex("users")
    .insert(req.body)
    .then((newUserId) => {
      let token = jwt.sign(
        { username: req.body.username, id: req.body.id },
        secretkey);
      res.status(201).json({token:token});
    })
    .catch(() => {
      res.status(400).json({
        message: `Error Adding User`,
      });
    });
};
