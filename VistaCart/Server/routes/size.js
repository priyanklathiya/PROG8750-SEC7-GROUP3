const express = require( "express");
const router = express.Router();

const { addSize, getAllSize, deleteSize, updateSize, getSizeByCategory } = require("../controllers/size");

// router.route("/").get(getAllProducts);

router.route("/addSize").post(addSize);
router.route("/getAllSize").get(getAllSize);
router.route("/getSizeByCategory").post(getSizeByCategory);
router.route("/deleteSize").post(deleteSize);
router.route("/updateSize").post(updateSize);

module.exports = router;