const fs = require("fs");
const path = require("path");
const User = require("../models/userModel.js");

let userList;
const userController = {};

userController.validate = (req, res, next) => {
  userList = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, "../../db/users.json"))
  );

  for (let user of userList) {
    if (
      user.username === req.body.username &&
      user.password === req.body.password
    ) {
      res.locals.login = true;
      return next();
    }
  }
  res.locals.login = false;
  next();
};

userController.createUser = (req, res, next) => {
  const user = new User(req.body);
  userList = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, "../../db/users.json"))
  );
  userList.push(user);
  fs.writeFileSync(
    path.resolve(__dirname, "../../db/users.json"),
    JSON.stringify(userList),
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );
  next();
};

module.exports = userController;
