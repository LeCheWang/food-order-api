const express = require("express");
const router = express.Router();

const {
    addToCart
} = require("../controllers/cart.controller");

router
    .route("/")
    .post(addToCart)

module.exports = router;