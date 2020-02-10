const mongoose = require("mongoose");
const config = require("config");

const MONGO_URL = config.get("MONGO_URL");

const connectDB = () => {
  mongoose
    .connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })
    .then(() => console.log("Mongo DB is Connected ..."))
    .catch(err => console.log(err));
};

module.exports = connectDB;
