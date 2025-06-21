//! Importo express
const express = require("express")
const app = express()
app.use(express.json());

const port = process.env.DB_PORT || 3000;
require("dotenv").config();
//! Connection al db 
const connection = require("./Connection/connection");

//! Routes
//*Aeroport
const router = require("./Routes/router") 
//*Single data 
const routerSingleData = require("./Routes/RouteSingleData")
//*delete 
const routerDestroy=require("./Routes/destroy")


app.use("/aeroporto", router);
app.use("/aeroporto", routerSingleData);
app.use("/", routerDestroy);


//* Rotta default 
app.get("/", (req, res) => {
  res.send("Connected to the server");
});

//! IMPORT MIDDLEWARE
const ErrorHandler = require("./Middlewares/ErrorHandler");
const NotFound = require("./Middlewares/NotFound");


//!Route  del ErrorHandler 
app.use(ErrorHandler);
//! Route del NotFound
app.use(NotFound)

//* LISTENER
app.listen(port,()=>{
     console.log(`http://localhost:${port}`);
})