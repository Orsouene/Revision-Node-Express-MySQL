const express = require("express");
const routerDestroy=express.Router();
const destroy = require("../Controllers/Delete") 
routerDestroy.delete("/:aeroporto/:id", destroy);

module.exports=routerDestroy