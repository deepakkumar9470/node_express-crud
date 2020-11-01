// Including env file here
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 8000
app.use(cors());
// Importing Routes
const postRoute = require("./routes/posts");
app.use(bodyParser.json());
app.use("/posts", postRoute);


// Connection to MongoDB here
mongoose.connect(process.env.MONGO_DB, {useNewUrlParser:true, useUnifiedTopology:true})

const db = mongoose.connection
db.on("error", (err)=>{
    console.log(err);
})
db.once("open", ()=>{
    console.log("MongoDB Connection Successful..");
})

// ROUTES

app.get("/", (req, res)=>{
    res.send("<H1>Node Express CRUD</h1>")
})
app.listen(PORT, (req, res)=>{
    console.log("App is running on port 8000");
})