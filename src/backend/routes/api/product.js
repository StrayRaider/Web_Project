const express = require("express");
const router = express.Router();
const Product = require("../../models/product");

// Add a new product
router.post("/add", async (req, res) => {
  try {
    const newProduct = await Product.create({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      stock: req.body.stock,
      images: req.body.images,
      brand: req.body.brand,
    });
    res.status(200).json({ newProduct });
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).send("Error!");
  }
});

// Update an existing product
// Express.js route for updating a product
router.put("/update/:id", async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        stock: req.body.stock,
        category: req.body.category,
        brand: req.body.brand,
        images: req.body.images,
      },
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).send("Product not found");
    }

    res.status(200).json(updatedProduct);
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).send("Error!");
  }
});

// Delete a product
router.delete("/delete/:id", async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);

    if (!deletedProduct) {
      return res.status(404).send("Product not found");
    }

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).send("Error!");
  }
});

//ürünleri göster
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    if (!products || products.length === 0) {
      return res.status(404).send("No products found");
    }
    return res.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).send("An error occurred while fetching products");
  }
});

module.exports = router;
