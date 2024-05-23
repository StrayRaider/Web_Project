const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Product = require('../../models/product');
router.post("/add", async (req,res) => {
  try {
    const newProduct = await Product.create({name:req.body.name,description:req.body.description,price:req.body.price,category:req.body.category,stock:req.body.stock,images:req.body.images,brand:req.body.brand})
    if(!newProduct){
      res.status(201).json({newProduct})
    }
  } catch (error) {
    res.status(500).send("Error!")
  }
})
module.exports = router;