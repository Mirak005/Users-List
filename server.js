const express = require("express");
const connectDB = require("./config/connectDB");

const app = express();

const user = require("./routes/api/user");
const photo = require("./routes/api/photo") ; 


//Middelwares 
app.use(express.json())

//Connect the Data Base
connectDB();

//Routes
app.use("/api/user", user);
app.use("/api/photo", photo);


//Start The Server

const port = process.env.PORT || 5001;

app.listen(port, err => {
  if (err) console.log("Error! : Server is not Running");
  console.log(`Server is Running on ${port}....`);
});
