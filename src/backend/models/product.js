// Define the Product Schema
const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    category: {
        type: String,
        required: true,
        trim: true
    },
    stock: {
        type: Number,
        required: true,
        min: 0,
        default: 0
    },
    images: [{
        type: String,
        trim: true
    }],
    brand: {
        type: String,
        trim: true
    },
    dateAdded: {
        type: Date,
        default: Date.now
    }
});

// Create the Product model
const Product = mongoose.model('Product', productSchema);

module.exports = Product;