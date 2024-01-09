const express = require("express");
const router = express.Router();

const {
    createOrder
} = require("../controllers/order.controller");

router
    .route("/")
    .post(createOrder);

module.exports = router;