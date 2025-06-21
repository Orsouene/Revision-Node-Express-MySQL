
const express = require("express");
const router = express.Router();

const index = require("../Controllers") 
router.get("/:aeroporto", index);

module.exports = router