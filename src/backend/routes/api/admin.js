const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../models/user');
const Product = require('../../models/product');
// Route ../../models/product get all products
router.get("/manage/products", async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: 'An error occurred while fetching products.' });
    }
});

// Route to update a product by name
router.post("/manage/products/update/:id", async (req, res) => {
    try {
        const productId = req.params.id;
        const updateData = req.body;

        const updatedProduct = await Product.findOneAndUpdate({ id: productId }, updateData, { new: true });

        if (updatedProduct) {
            res.status(200).json(updatedProduct);
        } else {
            res.status(404).json({ error: 'Product not found' });
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: 'An error occurred while updating the product.' });
    }
});

// Route to create a new product
router.post("/manage/products", async (req, res) => {
    try {
        const newProduct = await Product.create({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            category: req.body.category,
            stock: req.body.stock,
            images: req.body.images,
            brand: req.body.brand
        });

        res.status(201).json(newProduct);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: 'An error occurred while creating the product.' });
    }
});

// Route to delete a product by name
router.delete("/manage/products/delete/:id", async (req, res) => {
    try {
        const productId = req.params.id;

        const deletedProduct = await Product.findOneAndDelete({ id: productId });

        if (deletedProduct) {
            res.status(200).json({ message: 'Product deleted successfully' });
        } else {
            res.status(404).json({ error: 'Product not found' });
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: 'An error occurred while deleting the product.' });
    }
});


// Route to get all users
router.get("/manage/users", async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: 'An error occurred while fetching users.' });
    }
});

// Route to update a user by ID
router.post("/manage/users/update/:id", async (req, res) => {
    try {
        const userId = req.params.id;
        const updateData = req.body;

        const updatedUser = await User.findOneAndUpdate({ _id: userId }, updateData, { new: true });

        if (updatedUser) {
            res.status(200).json(updatedUser);
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: 'An error occurred while updating the user.' });
    }
});

// Route to create a new user
router.post("/manage/users", async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 8);
        const newUser = await User.create({
          name: req.body.name,
          surname: req.body.surname,
          gender: req.body.gender,
          phonenumber: req.body.phonenumber,
          email: req.body.email,
          password: hashedPassword,
          dob: req.body.dob,
          role: req.body.role,
        });
        res.status(201).json(newUser);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: 'An error occurred while creating the user.' });
    }
});

// Route to delete a user by ID
router.delete("/manage/users/delete/:id", async (req, res) => {
    try {
        const userId = req.params.id;

        const deletedUser = await User.findOneAndDelete({ _id: userId });

        if (deletedUser) {
            res.status(200).json({ message: 'User deleted successfully' });
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: 'An error occurred while deleting the user.' });
    }
});
// Route to get all messages
router.get("/manage/messages", async (req, res) => {
    try {
        const messages = await Message.find();
        res.status(200).json(messages);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: 'An error occurred while fetching messages.' });
    }
});

// Route to update a message by ID
router.post("/manage/messages/update/:id", async (req, res) => {
    try {
        const messageId = req.params.id;
        const updateData = req.body;

        const updatedMessage = await Message.findOneAndUpdate({ _id: messageId }, updateData, { new: true });

        if (updatedMessage) {
            res.status(200).json(updatedMessage);
        } else {
            res.status(404).json({ error: 'Message not found' });
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: 'An error occurred while updating the message.' });
    }
});

// Route to create a new message
router.post("/manage/messages", async (req, res) => {
    try {
        const newMessage = await Message.create({
            message: req.body.message,
            sender: req.body.sender,
            receiver: req.body.receiver
        });

        res.status(201).json(newMessage);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: 'An error occurred while creating the message.' });
    }
});

// Route to delete a message by ID
router.delete("/manage/messages/delete/:id", async (req, res) => {
    try {
        const messageId = req.params.id;

        const deletedMessage = await Message.findOneAndDelete({ _id: messageId });

        if (deletedMessage) {
            res.status(200).json({ message: 'Message deleted successfully' });
        } else {
            res.status(404).json({ error: 'Message not found' });
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: 'An error occurred while deleting the message.' });
    }
});

module.exports = router;