const knex = require("knex")(require("../knexfile"));
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { secretkey } = process.env;

exports.getProfile = (req, res) => {
  // console.log(req.params);
  knex("user")
    .where({ id: req.params.id})
    .then((userData) => {
      res.status(200).json(userData[0]);
    })
    .catch(() => {
      res.status(400).json({ message: "Could not get user" });
    });
};

exports.customizeProfile = (req, res) => {
  console.log(req.body);
  knex("user")
    .where({ id: req.body.id })
    .update(req.body)
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
  knex("tracks")
    .insert(req.body)
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
    .where({ user_id: req.params.id })
    .then((userTracks) => {
      res.status(201).json({
        userTracks,
      });
    })
    .catch(() => {
      res.status(400).json({ message: "Could not get tracks" });
    });
};

exports.getSingleTrack = (req, res) => {
  // console.log(req)
  knex("tracks")
    .where({ id: req.params.id })
    .then((track) => {
      // console.log(track)
      res.status(201).json({track});
    })
    .catch(() => {
      res.status(400).json({ message: "Could not get this Track" });
    });
};

exports.getTracktoPrime = (req, res) => {

  knex('tracks')
  .where({track_audio : req.params.primedTrack_url})
  .then ((primedTrack) => {
    res.status(201).json({
      primedTrack,
    });
  })
  .catch(() => {
    res.status(400).json({ message: "Could not get this Track" });
  });
}

exports.uploadGear = (req, res) => {
  console.log(req.body)
  knex("gear")
    .insert(req.body)
    .then((newGear) => {
      res.status(201).json(newGear);
    })
    .catch(() => {
      res.status(400).json({
        message: `Error Adding Gear`,
      });
    });
};

exports.getGear = (req, res) => {
  knex("gear")
    .where({ user_id: req.params.id })
    .then((userGear) => {
      res.status(200).json({
        userGear,
      });
    })
    .catch(() => {
      res.status(400).json({ message: "Could not get tracks" });
    });
};

exports.editGear = (req, res) => {
  knex("gear").where({ user_id: req.user.id });
};

exports.customizeAvatar = (req, res) => {
  // console.log(req);
  knex("user")
    .where({ id: req.body.id })
    .update(req.body)
    .then(() => {
      res.sendStatus(200);
    })
    .catch(() => {
      res.status(400).json({
        message: `Error Editing Avatar`,
      });
    });
};

exports.editBio = (req, res) => {
  console.log(req.body)
  knex("user")
    .where({ id: req.body.id })
    .update(req.body)
    .then(() => {
      res.sendStatus(200);
    })
    .catch(() => {
      res.status(400).json({
        message: `Error Editing Biography`,
      });
    });
};
