module.exports = filter = (req, res, next) => {
  console.log(req.query);
  if (!req.query.age) {
    res.send("Age must be Entered");
  } else if (req.query.age < 20) {
    res.send("Age must be greater than 20");
  } else {
    next();
  }
};
