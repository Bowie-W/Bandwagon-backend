require("dotenv").config();
const knex = require("knex")(require("../knexfile"));
const jwt = require("jsonwebtoken");
const{secretkey} = process.env


exports.findUser = (req, res) => {
  knex("user")
    .where({ username: req.body.username })
    .then((founduser) => {
      if (founduser[0].password === req.body.password) {
        let token = jwt.sign({ username: req.body.username,
        id: founduser[0].id }, secretkey);
        res.status(200).json({token:token});
      }
    })
    .catch(() => {
      res.status(400).json({token: null});
    });
};
