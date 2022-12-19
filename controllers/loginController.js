require("dotenv").config();
const knex = require("knex")(require("../knexfile"));
const jwt = require("jsonwebtoken");
const{secretkey} = process.env


exports.findUser = (req, res) => {
  console.log(req.body.username)
  knex("user")
    .where({ username: req.body.username })
    .then((founduser) => {
      if (founduser[0].password === req.body.password) {
        let token = jwt.sign({ username: req.body.username,
        id: founduser[0].id }, secretkey);
        res.status(200).json({token:token});
      } else{
        res.status(403).json('Forbidden')
      }
    })
    .catch((error) => {
      res.status(400).json(error);
    });
};
