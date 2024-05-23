const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const session = require('express-session');
const jwt = require('jsonwebtoken');
const helmet = require('helmet');
const app = express();
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/api/user');
const productRoutes = require('./routes/api/product');
const ollamaRoutes = require('./routes/api/ollama');
app.use(session({
  secret: 'eren',
  resave: false,
  saveUninitialized: false
}));
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());
SECRET_KEY = "eren"
mongoose.connect("mongodb://localhost:27017/webproject", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.use("/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/product", productRoutes);
app.use("/api/ollama", ollamaRoutes);

// Start the server on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


