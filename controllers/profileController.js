const knex = require("knex")(require("../knexfile"));
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { secretkey } = process.env;

function checkToken(req, res, next) {
  const token = req.headers.authorization.split("")[1];
  if (token && jwt.verify(token, secretkey)) {
    req.user = jwt.decode(token);
    next();
  } else {
    next();
  }
}

exports.getProfile = (req, res) => {
  console.log(req.user);
  knex("users")
    .where({ username: req.user.username })
    .then((userData) => {
      res.status(200).json(userData[0]);
    })
    .catch(() => {
      res.status(400).json({ message: "Could not get user" });
    });
};

exports.customizeProfile = (req, res) => {
  console.log(req.user);
  knex("users")
    .where({ username: req.user.username })
    .then((userData) => {
      res.status(200).json({
        city: userData[0].city,
      });
    })
    .catch(() => {
      res.status(400).json({ message: "Could not get user" });
    });
};

exports.uploadAvatar = (req, res) => {

}
