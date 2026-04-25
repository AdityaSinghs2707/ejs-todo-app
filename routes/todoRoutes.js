const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const Todo = require("../models/Todo");


router.get("/dashboard", authMiddleware, async (req, res) => {
  const todos = await Todo.find({ userId: req.session.userId });
  res.render("dashboard", { todos });
});


router.post("/todo/add", authMiddleware, async (req, res) => {
  const todo = new Todo({
    userId: req.session.userId,
    text: req.body.text
  });
  await todo.save();
  res.redirect("/dashboard");
});


router.post("/todo/delete/:id", authMiddleware, async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.redirect("/dashboard");
});

module.exports = router;