require("dotenv").config(); // ✅ sabse upar

const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");

// session
app.use(session({
  secret: process.env.SESSION_SECRET || "fallback-secret", // ✅
  resave: false,
  saveUninitialized: false
}));

// routes import
const authRoutes = require("./routes/authRoutes");
const todoRoutes = require("./routes/todoRoutes");

// routes use
app.use("/", authRoutes);
app.use("/", todoRoutes);

// DB connect
mongoose.connect(process.env.MONGO_URI) // ✅
.then(() => console.log("DB connected"))
.catch(err => console.log(err));

// server
app.listen(process.env.PORT || 3000, () => {
  console.log(`http://localhost:${process.env.PORT || 3000}`);
});