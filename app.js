import express from "express";
import session from "express-session";
import crypto from "crypto";
import cors from "cors"; // cors modülünü import edin

const app = express();

// CORS middleware'i uygulayın
app.use(cors());

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

// Routes
app.post("/api/login", async (req, res) => {
  console.log("merhaba");

  try {
    // Check user credentials (e.g., validate username and password)
    //const { email, password } = req.body;
    console.log(req);
    //console.log(email);
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
