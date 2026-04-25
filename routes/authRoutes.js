const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../models/User");


router.get("/", (req, res) => {
  res.render("login");
});

router.get("/login", (req, res) => {
  res.render("login");
});


router.get("/register", (req, res) => {
  res.render("register");
});


router.post("/register", async (req, res) => {
  const { username, password } = req.body;

  const existingUser = await User.findOne({ username });
  if (existingUser) {
    return res.send("User already exists! <a href='/register'>Go back</a>");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ username, password: hashedPassword });
  await user.save();

  res.redirect("/login");
});


router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });
  if (!user) {
    return res.send("User not found! <a href='/login'>Go back</a>");
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.send("Wrong password! <a href='/login'>Go back</a>");
  }

  req.session.userId = user._id;
  res.redirect("/dashboard");
});


router.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/login");
});

module.exports = router;