const express = require("express");
const router = express.Router();
const conversationsController = require("../controllers/conversationsController");
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
    .post(conversationsController.createChat)

router
    .route('/:userid')
    .get(conversationsController.getConversations)

router
    .route('/:userid/:conversationID/')
    .get(conversationsController.getMessages)
    .post(conversationsController.addMessage)




module.exports = router;
