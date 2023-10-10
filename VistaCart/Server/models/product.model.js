
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

// connection string can be found in server.js

mongoose.Promise = global.Promise;

// product schema
const productSchema = new Schema({
    sku: { type: String, required: true, unique: true, trim: true },
    productName: { type: String, required: true, default: 'default' },
    productDescription: { type: String },
    quantity: { type: Number },
    imagePath: {
        imagePath1: { type: String },
        imagePath2: { type: String },
        imagePath3: { type: String }
    },
});


const info = mongoose.model("product", productSchema);  // collection name - product
module.exports = info;