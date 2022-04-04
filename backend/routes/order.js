const express = require("express");
const router = express.Router();


const {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
} = require("./verifyToken");

const {
    createOrder : createOrder,
    updateOrder : updateOrder,
    deleteOrder : deleteOrder,
    getOrder : getOrder,
    getAllOrder : getAllOrder,
    getOrderStats : getOrderStats
} = require("../controllers/order");

//CREATE
router.post("/", verifyToken, createOrder)

//UPDATE
router.put("/:id", verifyTokenAndAdmin, updateOrder)

//DELETE
router.delete("/:id", verifyTokenAndAdmin, deleteOrder)

//GET USER ORDERS
router.get("/find/:userId", verifyTokenAndAuthorization, getOrder)

// //GET ALL ORDERS
router.get("/", verifyTokenAndAdmin, getAllOrder)

// GET MONTHLY STATS INCOME
router.get("/income", verifyTokenAndAdmin, getOrderStats)

module.exports = router;