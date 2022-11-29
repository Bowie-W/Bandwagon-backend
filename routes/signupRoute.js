const express = require("express");
const router = express.Router();
const signupController = require("../controllers/signupController");



router
.route('/')
.post(signupController.addNewUser)




module.exports = router;
