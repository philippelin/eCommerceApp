const express = require("express");
const router = express.Router();

const {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
} = require("../routes/verifyToken");

const {
    updateUser: updateUser,
    deleteUser: deleteUser,
    getUser: getUser,
    getAllUser: getAllUser,
    statsUser: statsUser
} = require("../controllers/user");


//UPDATE
router.put("/:id", verifyTokenAndAuthorization, updateUser)

//DELETE
router.delete("/:id", verifyTokenAndAuthorization, deleteUser)

//GET USER
router.get("/find/:id", verifyTokenAndAdmin, getUser)

//GET ALL USER
router.get("/", verifyTokenAndAdmin, getAllUser)

//GET USER STATS
router.get("/stats", verifyTokenAndAdmin, statsUser)

module.exports = router;