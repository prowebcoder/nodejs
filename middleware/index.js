const express = require("express");
const app = express();
const filter = (req, res, next) => {
  if (!req.query.age) {
    res.send("Age must be Entered");
  } else if (req.query.age < 20) {
    res.send("Age must be greater than 20");
  } else {
    next();
  }
};
app.use(filter);
app.get("/", (req, res) => {
  res.send("Hello to Homepage");
});
app.get("/login", (req, res) => {
  res.send("Hello to login page");
});
app.get("/about", (req, res) => {
  res.send("welcome to about page");
});

app.listen(5000);
