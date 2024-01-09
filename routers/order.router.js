const express = require("express");
const router = express.Router();

const {
    createOrder,
    getOrder
} = require("../controllers/order.controller");

router
    .route("/")
    .get(getOrder)
    .post(createOrder);

module.exports = router;