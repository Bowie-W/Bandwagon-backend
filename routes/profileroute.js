const express = require("express");
const router = express.Router();
const profileController = require("../controllers/profileController");
const jwt = require('jsonwebtoken')
require("dotenv").config();
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
    .route(`/`)
    .get(checkToken, profileController.getProfile);

router
    .route("/customize")
    .put(profileController.customizeProfile);

module.exports = router;
