const express = require("express");
const router = express.Router();

const {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
} = require("./verifyToken");

const {
    createCart : createCart,
    updateCart : updateCart,
    deleteCart : deleteCart,
    getCart : getCart,
    getAll : getAll
} = require("../controllers/cart");


//CREATE
router.post("/", verifyToken, createCart)

//UPDATE
router.put("/:id", verifyTokenAndAuthorization, updateCart)

//DELETE
router.delete("/:id", verifyTokenAndAuthorization, deleteCart)

//GET USER CART
router.get("/find/:userId", verifyTokenAndAuthorization, getCart)

// //GET ALL
router.get("/", verifyTokenAndAdmin, getAll)

module.exports = router;