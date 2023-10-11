
const productmodel = require('../models/product.model');

const getAllProducts = async (req, res) => { 
    const allProducts = await productmodel.find({});
    res.status(200).json({ allProducts });
};

const addProduct = async (req, res) => { 
    try {
        // console.log(req.body);

        await productmodel.create({
        sku: req.body.sku,
        productName: req.body.productName,
        productDescription: req.body.productDescription,
        quantity: req.body.quantity,
        imagePath: {
            imagePath1: req.body.imagePath.imagePath1,
            imagePath2: req.body.imagePath.imagePath2,
            imagePath3: req.body.imagePath.imagePath3
        },
        }).then(() => {
            res.status(200).json({ msg: "Product Added Successfully", status: 1 });
        })
    } catch (error) {
        res.status(200).json({ msg: "Error: Product could not be added", err: error, status: 0 });
    }
};

module.exports = {getAllProducts, addProduct}