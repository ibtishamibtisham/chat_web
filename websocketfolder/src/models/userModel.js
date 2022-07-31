const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    photoUrl: { type: String, required: true, default: "./user.png" },
  },
  { timestamps: true }
);
const userModel = mongoose.model("User", userSchema);
module.exports = userModel;
