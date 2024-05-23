import express from "express";
import session from "express-session";
import crypto from "crypto";
import cors from "cors"; // CORS modülünü import edin

const app = express();

// CORS middleware'ini uygulayın
app.use(cors());

// Body parsing middleware'leri
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Function to generate a random secret key for session
const generateSecretKey = () => {
  return crypto.randomBytes(32).toString("hex");
};

// Configure session middleware with a random secret key
const secretKey = generateSecretKey(); // Generate a random secret key for session
app.use(
  session({
    secret: secretKey,
    resave: false,
    saveUninitialized: true,
  })
);

// Temporary user credentials
const validUsername = "admin";
const validPassword = "password";

// Routes
app.post("/api/login", async (req, res) => {
  console.log("Received login request");

  try {
    // Check user credentials (e.g., validate username and password)
    const { email, password, rememberMe } = req.body;
    console.log("username:", email);

    // If authentication is successful
    if (email === validUsername && password === validPassword) {
      // Set session data
      req.session.loggedIn = true;

      // If rememberMe is checked, set a persistent cookie without expiration time
      if (rememberMe) {
        res.cookie("rememberMe", "true", { httpOnly: true });
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

// Routes
app.post("/api/signup", async (req, res) => {
    console.log("Received signup request");
  
    try {
      // Check user credentials (e.g., validate username and password)
      const { email, password, name, surname, birthdate, gender, phoneNumber } = req.body;
      console.log("user data:", email, password, name, surname, birthdate, gender, phoneNumber);

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
