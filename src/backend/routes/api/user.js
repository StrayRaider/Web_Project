const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../../models/user");

router.get("/", async (req, res) => {
  // Retrieve user information from the request object
  const user = req.user;

  // Send the user object as JSON response
  res.status(200).json({ user: user });
});

router.post("/update", async (req, res) => {
  try {
    // TODO add products and favorites to this
    // Retrieve user ID from the authenticated user object
    const userId = req.user.id;

    // Find the user by ID in the database
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update user information based on the request body
    // You can customize this part according to the fields you want to allow the user to update
    if (req.body.name) user.name = req.body.name;
    if (req.body.surname) user.surname = req.body.surname;
    if (req.body.gender) user.gender = req.body.gender;
    if (req.body.phonenumber) user.phonenumber = req.body.phonenumber;
    if (req.body.dob) user.dob = req.body.dob;

    // Save the updated user object to the database
    await user.save();

    // Send a success response
    res
      .status(200)
      .json({ message: "User information updated successfully", user: user });
  } catch (error) {
    console.error("Error updating user information:", error);
    res
      .status(500)
      .json({ message: "An error occurred while updating user information" });
  }
});
module.exports = router;
