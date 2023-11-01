const express = require( "express");
const router = express.Router();
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'Images/products');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now()  + '_' +  file.originalname);
    }
})

const upload = multer({
    storage: storage,
})


const { getAllProducts, addProduct } = require("../controllers/products");

router.route("/").get(getAllProducts);

// router.route("/addProduct").post(upload.fields([ { name: 'imagePath1', maxCount: 1 }, { name: 'imagePath2', maxCount: 1 }, { name: 'imagePath3', maxCount: 1 }, ]), addProduct);

router.route("/addProduct").post((req, res, next) => { 
    console.log(req.body);
    // Check if imagePath1 file is present
    if (!req.file || !req.file.imagePath1) {
        return res.status(400).json({ status: 0, msg: 'Please provide imagePath1.' });
    }

    // Include imagePath1 in the upload
    const uploadFields = [{ name: 'imagePath1', maxCount: 1 }];

    // Check if imagePath2 file is present and add it to the uploadFields
    if (req.file.imagePath2) {
        uploadFields.push({ name: 'imagePath2', maxCount: 1 });
    }

    // Check if imagePath3 file is present and add it to the uploadFields
    if (req.file.imagePath3) {
        uploadFields.push({ name: 'imagePath3', maxCount: 1 });
    }

    upload.fields(uploadFields)(req, res, next);
}, addProduct);

module.exports = router;