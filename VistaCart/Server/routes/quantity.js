const express = require( "express");
const router = express.Router();

const { addQuantity, getAllQuantity, deleteQuantity, updateQuantity, getQuantityBySku } = require("../controllers/quantity");

// router.route("/").get(getAllProducts);

router.route("/addQuantity").post(addQuantity);
router.route("/getAllQuantity").get(getAllQuantity);
router.route("/deleteQuantity").post(deleteQuantity);
router.route("/getQuantityBySku").post(getQuantityBySku);
router.route("/updateQuantity").post(updateQuantity);
module.exports = router;