
const express = require("express");
const router = express.Router();
const messagessController = require("../controllers/messagesController");

router
    .route('/:convo_id')
    .get(messagessController.getMessages)


module.exports = router;
