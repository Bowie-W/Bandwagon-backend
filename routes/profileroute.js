const express = require("express");
const router = express.Router();
const profileController = require("../controllers/profileController");
const jwt = require('jsonwebtoken')
require("dotenv").config();
const path = require('path')
const{secretkey} = process.env


function checkToken(req, res, next){
    console.log(req.headers.authorization);
    const token = req.headers.authorization.split(' ')[1]
    if (token && jwt.verify(token, secretkey)){
        req.user = jwt.decode(token)
        next()
    }else{
        next()
    }
}


router
    .route(`/:username`)
    .get(checkToken, profileController.getProfile);

router
    .route("/customize")
    .put(profileController.customizeProfile)

router
    .route("/customize/avatar")
    .put(profileController.customizeAvatar)

router
    .route('/tracks')
    .get(checkToken, profileController.getTracks)

router
    .route('/:username/gear')
    .get(checkToken, profileController.getGear)

router
    .route("/customize/tracks")
    .post(profileController.uploadTrack)

router
    .route("/customize/gear")
    .post(checkToken, profileController.uploadGear)
    .get(checkToken, profileController.getGear)

module.exports = router;
