const express = require("express");
const router = express.Router();
const profileController = require("../controllers/profileController");
const jwt = require('jsonwebtoken')
require("dotenv").config();
const path = require('path')
const{secretkey} = process.env


function checkToken(req, res, next){
    // console.log(req.headers.authorization);
    const token = req.headers.authorization.split(' ')[1]
    if (token && jwt.verify(token, secretkey)){
        req.user = jwt.decode(token)
        next()
    }else{
        next()
    }
}




router
    .route("/customize/avatar")
    .put(profileController.customizeAvatar)

router
    .route("/customize/")
    .put(profileController.customizeProfile)


router
    .route('/tracks/single/:id')
    .get(profileController.getSingleTrack)

router
    .route('/tracks/:id')
    .get(profileController.getTracks)


router
    .route("/customize/tracks")
    .post(profileController.uploadTrack)

router
    .route("/customize/gear")
    .post(profileController.uploadGear)
    .get(profileController.getGear)
    .put(profileController.editGear)

router
    .route('/customize/bio')
    .put(profileController.editBio)

router
    .route('/customize/Chips')
    .put(profileController.editChips)

router
    .route(`/:id`)
    .get(profileController.getProfile);

router
    .route('/:id/gear')
    .get(profileController.getGear)
module.exports = router;
