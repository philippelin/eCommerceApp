const express = require("express");
const router = express.Router();


const {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
} = require("./verifyToken");

const {
    createProduct : createProduct,
    updateProduct : updateProduct,
    deleteProduct : deleteProduct,
    getProduct : getProduct,
    getAllProduct : getAllProduct
} = require("../controllers/product");

//CREATE
router.post("/", verifyTokenAndAdmin, createProduct)

//UPDATE
router.put("/:id", verifyTokenAndAdmin, updateProduct)

//DELETE
router.delete("/:id", verifyTokenAndAdmin, deleteProduct)

//GET PRODUCT
router.get("/find/:id", getProduct)

//GET ALL PRODUCTS
router.get("/", getAllProduct)

module.exports = router;