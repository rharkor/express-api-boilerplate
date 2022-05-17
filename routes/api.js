const express = require("express");
const router = express.Router();

const IndexController = require("../controllers/index.controller");

router.get("/", IndexController.index);

module.exports = router;
