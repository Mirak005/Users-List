const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String
  },
  lastName: {
    type: String
  },
  birthYear: {
    type: String
  },
  birthLocation: {
    type: String
  }
});

module.exports = User = mongoose.model("user" , UserSchema )