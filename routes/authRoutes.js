const express = require("express");
const router = express.Router();

// Example routes
router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/register", (req, res) => {
  res.render("register");
});

module.exports = router; // ✅ ye line ZAROORI hai