
const express = require("express");
const router = express.Router();
const messagessController = require("../controllers/messagesController");

router
    .route(`/newChat/:chatId`)
    .get(messagessController.getNewChat)

router
    .route('/:convo_id')
    .get(messagessController.getMessages)
    .post(messagessController.postMessage)


module.exports = router;
