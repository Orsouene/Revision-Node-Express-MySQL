//! Importo express
const express = require("express")
const app = express()
app.use(express.json());
require("dotenv").config();

const port = process.env.DB_PORT || 3000;


//! Routes
//*Aeroport
const router = require("./Routes/indexAllData") 
//*Single data 
const routerSingleData = require("./Routes/routeSingleData")
//*delete 
const routerDestroy=require("./Routes/destroy")

const postPassenger = require("./Routes/postPassenger");

app.use("/aeroporto", router);
app.use("/aeroporto", routerSingleData);
app.use("/aeroporto", routerDestroy);
app.use("/aeroportos", postPassenger);


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