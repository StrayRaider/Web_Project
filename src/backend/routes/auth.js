const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
router.post("/register", async (req, res) => {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 8);
      const newUser = await User.create({ name: req.body.name, surname:req.body.surname,gender:req.body.gender,phonenumber:req.body.phonenumber, email: req.body.email, password: hashedPassword, dob: req.body.dob });
      req.session.user = newUser.toJSON(); // Store the user object in the session
      res.status(200).json({ user: newUser });
    } catch (error) {
      console.error("Error registering a new user", error);
      res.status(500).send("An error occurred while registering a new user");
    }
  });
router.post("/login", async (req, res) => {
try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
    return res.status(401).send("Invalid email or password");
    }

    const isPasswordValid = await bcrypt.compare(req.body.password, user.password);
    if (!isPasswordValid) {
    return res.status(401).send("Invalid email or password");
    }

    const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, { expiresIn: '1h' });
    req.session.userAgent = req.headers['user-agent'];
    res.status(200).json({ token });
} catch (error) {
    console.error("Error logging in user", error);
    res.status(500).send("An error occurred while logging in user");
}
});

module.exports = router;