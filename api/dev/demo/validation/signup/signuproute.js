const router = require("express").Router();
const Users = require("../models/SignUpModel");
const { signupvalidation } = require("../validation/signup_validation");
const bcrypt = require("bcrypt");


router.post("/", async (req, res) => {
  //validation
  const { error } = signupvalidation(req.body);
  if (error) return res.send(error.details[0].message);

  //check for existing email
  const usernameexist = await Users.findOne({ username: req.body.username });
  if (usernameexist) return res.status(400).send("username already exists");

  //hash the password
  const salt = await bcrypt.genSalt(10);
  const hashedpassword = await bcrypt.hash(req.body.password, salt);

  //get and assign data in user
  const user = new Users({
    username: req.body.username,
    email: req.body.email,
    mobile: req.body.mobile,
    password: hashedpassword,
  });

  // send to database
  try {
    const savedUser = await user.save();
    res.send("successfully created user");
  } catch (err) {
    res.status(404).send(err);
  }
});

module.exports = router;

// {
//     "username":"jxstWieslaw",
//     "email":"wieslaw@gmail.com",
//     "mobile":"8580771544",
//     "password":"wieslawwieslaw",
//     "confirmPassword":"wieslawwieslaw"
// }
