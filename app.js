require("dotenv").config(); // 

const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");

const app = express();

app.use(express.urlencoded({ extended: true }));


app.use(express.static(__dirname + "/public"));

app.set("view engine", "ejs");


app.use(session({
  secret: process.env.SESSION_SECRET || "fallback-secret", 
  resave: false,
  saveUninitialized: false
}));

const authRoutes = require("./routes/authRoutes");
const todoRoutes = require("./routes/todoRoutes");


app.use("/", authRoutes);
app.use("/", todoRoutes);

mongoose.connect(process.env.MONGO_URI) // ✅
.then(() => console.log("DB connected"))
.catch(err => console.log(err));


app.listen(process.env.PORT || 3000, () => {
  console.log(`http://localhost:${process.env.PORT || 3000}`);
});