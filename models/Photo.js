const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PhotoSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  title: {
    type: String
  },
  path: {
    type: String
  }
});

module.exports = Photo = mongoose.model("photo", PhotoSchema);
