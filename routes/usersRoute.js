const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");
const jwt = require('jsonwebtoken')
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
    .route('/')
    .get(checkToken, usersController.getAllUsers);

router
    .route('/conversation/list')
    .post(usersController.getConversationListUsers)

router
    .route('/:userid')
    .get(usersController.getSingleUser)


module.exports = router;
