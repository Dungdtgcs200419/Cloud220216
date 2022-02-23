const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    Name: String,
    Pwd: String,
    Email: String,
    Age: String,
    Role: String,
  });
  const User = mongoose.model("userss", UserSchema, "User");
//

  module.exports = User;
  