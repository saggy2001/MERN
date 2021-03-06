const dotenv = require("dotenv");
const express = require("express");
const app = express();

dotenv.config({ path: "./.env" });
require("./db/conn");

app.use(express.json());
// we link the router to make routing easy
app.use(require("./router/auth"));

const PORT = process.env.PORT;

const middleware = (re, res, next) => {
  console.log("middleware working");
  next();
};

app.get("/", middleware, (req, res) => {
  res.send("Hello Sagar");
});

app.get("/about", (req, res) => {
  res.send("This is about");
});
app.get("/contact", (req, res) => {
  res.send("This is contact");
});
app.get("/signin", (req, res) => {
  res.send("This is signin");
});
app.get("/signup", (req, res) => {
  res.send("This is signup");
});

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
