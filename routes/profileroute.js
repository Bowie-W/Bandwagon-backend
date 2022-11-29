const express = require("express");
const router = express.Router();
const profileController = require("../controllers/profileController");

router.route("/");

router
    .route(`/:user_id`)
    .get(profileController.getProfile);

router
    .route("/:user_id/customize")
    .put(profileController.customizeProfile);

module.exports = router;
