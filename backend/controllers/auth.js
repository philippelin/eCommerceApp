const express = require("express");
const router = express.Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");



//Register method = Signup
exports.register = async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(
            req.body.password,
            "hashsecret"
        ).toString(),
    });
    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(500).json(err);
    }
};


//Login method  = Signin
exports.login = async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        !user && res.status(401).json("Utilisateur non trouvé !");

        const hashedPassword = CryptoJS.AES.decrypt(
            user.password,
            "hashsecret"
        );
        const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

        OriginalPassword !== req.body.password &&
        res.status(401).json("Mot de passe incorrect !");

        const accessToken = jwt.sign(
            {
                id: user._id,
                isAdmin: user.isAdmin,
            },
            "secretKey",
            {expiresIn:"3d"}
        );

        const { password, ...others } = user._doc;

        res.status(200).json({...others, accessToken});
    } catch (err) {
        res.status(500).json(err);
    }
};