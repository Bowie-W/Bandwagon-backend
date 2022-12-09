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

const multer = require('multer');
const { get } = require("http");
const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, './public/images')
    },
    filename: (req, file, cb) => {
        console.log(file)
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({storage: storage })

router
    .route(`/`)
    .get(checkToken, profileController.getProfile);

router
    .route("/customize")
    .put(profileController.customizeProfile)
    .post(upload.single('image'), profileController.uploadAvatar)

router
    .route('/tracks')
    .get(checkToken, profileController.getTracks)

router
    .route('/gear')
    .get(checkToken, profileController.getGear)

router
    .route("/customize/tracks")
    .post(checkToken, profileController.uploadTrack)

router
    .route("/customize/gear")
    .post(checkToken, profileController.uploadGear)
    .get(checkToken, profileController.getGear)

module.exports = router;
