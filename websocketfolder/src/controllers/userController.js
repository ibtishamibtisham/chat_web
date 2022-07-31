const express = require("express");
const admin = require("firebase-admin");
const userModel = require("../models/userModel");

const router = express.Router();
let arr = [];
async function decodeToken(req, res, next) {
  //   console.log(req, "rex");
  const token = req.headers.authorization.split(" ")[1];
  const value = await admin.auth().verifyIdToken(token);
  if (value) {
    // console.log(value);
    arr.push(value);
    return next();
  }
  return res.json({ message: "not matched" });
}
router.post("/todos", decodeToken, async (req, res) => {
  let user = await userModel.findOne({ email: req.body.email });
  if (user) {
    return res.json(user);
  }
  user = await userModel.create({
    name: req.body.name,
    email: req.body.email,
    photoUrl: req.body.photoUrl,
  });
  await user.save();
  return res.json(user);
});
// router.get("/todos", decodeToken, (req, res) => {
//   //   console.log(arr);

//   return res.json({
//     todo: [{ name: "hello" }, { name: "ibti" }, { name: "sham" }],
//   });
// });
module.exports = router;
