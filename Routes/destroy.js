const express = require("express");
const router=express.Router();
const destroy = require("../Controllers/delete") 
router.delete("/:aeroporto/:id", destroy);

module.exports=router