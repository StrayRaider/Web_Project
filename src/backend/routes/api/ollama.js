const express = require("express");
const router = express.Router();
const axios = require("axios");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Message = require("../../models/message");
router.post("/chat", async (req, res) => {
  try {
    const newMessage = await Message.create({
      message: req.body.message,
      sender: req.body.sender,
      receiver: req.body.receiver,
    });
    if (newMessage) {
        // Define the payload for the external API request
        const payload = {
            model: "phi3",
            messages: [
                { role: "user", content: req.body.message }
            ]
        };

        // Make the POST request to the external API
        const response = await axios.post('http://localhost:11434/api/chat', payload);

        // Send the response from the external API back to the client
        res.status(200).json(response.data);
    } else {
        res.status(201).json(newMessage);
    }
  } catch (error) {
    res.status(500).send("Error!");
  }
});
module.exports = router;