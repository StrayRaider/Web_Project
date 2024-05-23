const express = require("express");
const session = require('express-session');

const app = express();

// Function to generate a random secret key for session
const generateSecretKey = () => {
  return crypto.randomBytes(32).toString('hex');
};

// Configure session middleware with a random secret key
app.use(session({
  secret: generateSecretKey(), // Generate a random secret key for session
  resave: false,
  saveUninitialized: true,
}));

// Routes
app.post("/api/login", async (req, res) => {
  try {
    // Check user credentials (e.g., validate username and password)
    const { username, password, rememberMe } = req.body;

    // If authentication is successful
    if (username === validUsername && password === validPassword) {
      // Set session data
      req.session.loggedIn = true;

      // If rememberMe is checked, set a persistent cookie without expiration time
      if (rememberMe) {
        res.cookie('rememberMe', 'true', { httpOnly: true });
      }

      res.status(200).send("Login successful");
    } else {
      res.status(401).send("Invalid username or password");
    }
  } catch (error) {
    console.error("Error logging in user", error);
    res.status(500).send("An error occurred while logging in user");
  }
});

// Route to check if user is authenticated
app.get("/api/user", (req, res) => {
  if (req.session.loggedIn || req.cookies.rememberMe) {
    res.status(200).send("User is authenticated");
  } else {
    res.status(401).send("User is not authenticated");
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});