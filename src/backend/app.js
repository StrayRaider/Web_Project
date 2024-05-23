const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { Schema } = mongoose;
const bodyParser = require("body-parser");
const { v4: uuidv4 } = require("uuid");
const session = require('express-session');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const helmet = require('helmet');
const app = express();
const User = require('./models/user')
const Product = require('./models/product')
const authRoutes = require('./routes/auth');
const apiRoutes = require('./routes/api');
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
app.use("/api", apiRoutes);

// Start the server on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


