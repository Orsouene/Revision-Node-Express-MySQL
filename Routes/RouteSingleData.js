const express = require("express");
const routerSingleData = express.Router();

const show = require("../Controllers/show");
routerSingleData.get("/:aeroporto/:id", show);


module.exports = routerSingleData;
