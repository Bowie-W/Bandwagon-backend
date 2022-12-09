const knex = require("knex")(require("../knexfile"));
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { secretkey } = process.env;

exports.getProfile = (req, res) => {
  console.log(req.user);
  knex("user")
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
  knex("user")
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

exports.uploadTrack = (req, res) => {
    const body = req.body
    body.user_id = req.user.id
  knex("tracks")
    .insert(body)
    .then((newTrack) => {
      res.status(201).json(newTrack);
    })
    .catch(() => {
      res.status(400).json({
        message: `Error Adding track`,
      });
    });
};

exports.getTracks = (req, res) => {
  knex("tracks")
    .where({ user_id: req.user.id })
    .then((userTracks) => {
      res.status(200).json({
        userTracks
      });
    })
    .catch(() => {
      res.status(400).json({ message: "Could not get tracks" });
    });
};

exports.uploadGear = (req, res) => {
    const body = req.body
    body.user_id = req.user.id
  knex("gear")
    .insert(body)
    .then((newGear) => {
      res.status(201).json(newGear);
    })
    .catch(() => {
      res.status(400).json({
        message: `Error Adding Gear`,
      });
    });
}

exports.getGear = (req, res) => {
    knex("gear")
    .where({ user_id: req.user.id })
    .then((userGear) => {
      res.status(200).json({
        userGear
      });
    })
    .catch(() => {
      res.status(400).json({ message: "Could not get tracks" });
    });
   
  };

exports.uploadAvatar = (req, res) => {};
