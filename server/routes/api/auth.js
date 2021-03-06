const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const auth = require("../../middleware/auth");

const user = require("../../models/User");
const { route } = require("./users");

// route POST api/users
router.post("/", (req, res) => {
  const { name, surname, email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ msg: "Please enter all fields correctly" });
  }

  user.findOne({ email }).then((user) => {
    if (!user) return res.status(400).json({ msg: "The user does not exist" });

    bcrypt.compare(password, user.password).then((isMatch) => {
      if (!isMatch) return res.status(400).json({ msg: "invalid credentials" });

      jwt.sign(
        { id: user.id },
        config.get("jwtSecret"),
        {
          expiresIn: 3600,
        },
        (err, token) => {
          if (err) throw err;
          res.json({
            token,
            user: {
              id: user.id,
              name: user.name,
              surname: user.surname,
              email: user.email,
            },
          });
        }
      );
    });
  });
});

// route GET api/auth/user
router.get("/user", auth, (req, res) => {
  User.findById(req.user.id)
    .select("-password")
    .then((user) => res.json(user));
});

module.exports = router;
