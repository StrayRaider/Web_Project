const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

async function authTokenUser(req, res, next) {
    // Extract the JWT token from the Authorization header
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.sendStatus(401); // No token provided
  
    try {
        // Verify the JWT token
        const decodedToken = jwt.verify(token, SECRET_KEY);
  
        // Extract user information from the decoded token
        const { id, email } = decodedToken;
  
        // Find the user in the MongoDB database using the id or email
        let user;
        if (id) {
            user = await User.findById(id);
        } else if (email) {
            user = await User.findOne({ email: email });
        }
  
        if (!user) {
            return res.sendStatus(404); // User not found
        }
  
        // Set the user object in the request for further use
        req.user = user;
  
        next(); // Proceed to the next middleware or route handler
    } catch (error) {
        console.error("Error verifying token:", error);
        res.sendStatus(403); // Forbidden, token invalid or expired
    }
  }
  
  // app.use('/api', authTokenUser);
  
  
app.get("/user",async (req, res) => {
// Retrieve user information from the request object
const user = req.user;

// Send the user object as JSON response
res.status(200).json({ user: user });
});

app.post("/user/update",async (req, res) => {
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
    res.status(200).json({ message: "User information updated successfully", user: user });
} catch (error) {
    console.error("Error updating user information:", error);
    res.status(500).json({ message: "An error occurred while updating user information" });
}
});


// add.post("/api/product/add", async (req,res) => {
//   try {
//     const newProduct = await Product.create({name:req.body.name,description:req.body.description,price:req.body.price,category:req.body.category,stock:req.body.stock,images:req.body.images,brand:req.body.brand})
//     if(!newProduct){
//       res.status(201).json({newProduct})
//     }
//   } catch (error) {
//     res.status(500).send("Error!")
//   }
// })
