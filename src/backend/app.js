const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const session = require("express-session");
const jwt = require("jsonwebtoken");
const helmet = require("helmet");
const app = express();
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/api/user");
// const productRoutes = require("./routes/product");
const ollamaRoutes = require("./routes/api/ollama");
const adminRoutes = require("./routes/api/admin");
const acl = require("express-acl");

async function authTokenUser(req, res, next) {
  // Extract the JWT token from the Authorization header
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
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

app.use(session({
  secret: "eren",
  resave: false,
  saveUninitialized: false,
}));
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());
SECRET_KEY = "eren";
mongoose.connect("mongodb://localhost:27017/webproject", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const acloptions = {
  filename: "nacl.yml",
  path: "",
  defaultRole: "guest"
}
acl.config(acloptions);
app.use(acl.authorize);

app.use("/auth", authRoutes);
app.use("/api/user", userRoutes);
// app.use("/api/product", productRoutes);
app.use("/api/ollama", ollamaRoutes);
app.use("/api/admin", adminRoutes);
// Start the server on port 3000
app.use("/api", authTokenUser);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
