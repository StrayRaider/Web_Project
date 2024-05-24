import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Admin.css";

const addProduct_url = "http://localhost:3000/api/product/add";
const getProduct_url = "http://localhost:3000/api/product";
const updateProduct_url = "http://localhost:3000/api/product/update";

const Admin = () => {
  const [productName, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [images, setImages] = useState("");
  const [products, setProducts] = useState([]);
  const [editingProductId, setEditingProductId] = useState(null);

  useEffect(() => {
    getProduct();
  }, []);

  const addProduct = async () => {
    console.log(productName, description, price, stock, images.name);
    try {
      const response = await axios.post(
        addProduct_url,
        {
          name: productName,
          description: description,
          price: price,
          stock: stock,
          category: category,
          brand: brand,
          images: images.name,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        console.log("Product added successfully!");
        getProduct(); // Fetch the updated list of products
      } else {
        console.error("Failed to add product:", response.statusText);
      }
    } catch (error) {
      console.error("An error occurred during adding product:", error);
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    setImages(file); // Resim dosyasını state'e atama
  };

  const getProduct = async () => {
    try {
      const response = await axios.get(getProduct_url);
      console.log("Response:", response.data); // API'den gelen verileri konsola yazdır
      setProducts(response.data); // Ürünleri state'e atama
    } catch (error) {
      console.error("An error occurred while fetching product:", error);
    }
  };

  const deleteProduct = async (productId) => {
    const deleteProduct_url = `http://localhost:3000/api/product/delete/${productId}`;
    try {
      const response = await axios.delete(deleteProduct_url);
      console.log("Deleted product:", response.data); // Silinen ürün bilgilerini konsola yazdır
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product._id !== productId)
      );
    } catch (error) {
      console.error("An error occurred while deleting the product:", error);
    }
  };

  const updateProduct = async (productId) => {
    const updateProduct_url_with_id = `${updateProduct_url}/${productId}`;
    try {
      const response = await axios.put(
        updateProduct_url_with_id,
        {
          name: productName,
          description: description,
          price: price,
          stock: stock,
          category: category,
          brand: brand,
          images: images.name,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        console.log("Product updated successfully!");
        getProduct(); // Fetch the updated list of products
        setEditingProductId(null); // Reset editing state
      } else {
        console.error("Failed to update product:", response.statusText);
      }
    } catch (error) {
      console.error("An error occurred during updating product:", error);
    }
  };

  const editProduct = (product) => {
    setEditingProductId(product._id);
    setName(product.name);
    setDescription(product.description);
    setPrice(product.price);
    setStock(product.stock);
    setCategory(product.category);
    setBrand(product.brand);
    setImages({ name: product.images });
  };

  return (
    <div className="admin-page">
      <h1>Admin Page</h1>
      <div className="product-form">
        <h2>{editingProductId ? "Edit Product" : "Add New Product"}</h2>
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={productName}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="number"
          name="stock"
          placeholder="Stock"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          type="file"
          accept=".jpg, .jpeg, .png"
          onChange={handleImageUpload}
        />
        <input
          type="text"
          name="brand"
          placeholder="Brand"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        />
        <button
          onClick={
            editingProductId
              ? () => updateProduct(editingProductId)
              : addProduct
          }
        >
          {editingProductId ? "Update Product" : "Add Product"}
        </button>
      </div>
      <div className="product-list">
        <h2>Products</h2>
        {products.map((product) => (
          <div key={product._id} className="product-item">
            {/* Ürün bilgilerinin gösterilmesi */}
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Stock: {product.stock}</p>
            <p>Category: {product.category}</p>
            <p>Brand: {product.brand}</p>
            <button onClick={() => deleteProduct(product._id)}>Delete</button>
            <button onClick={() => editProduct(product)}>Edit</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;
