const express = require("express");
const router = express.Router();

const {
    addToCart,
    getCart,
    deleteItem,
    updateItem
} = require("../controllers/cart.controller");

router
    .route("/")
    .post(addToCart)

router
    .route("/account/:account_id")
    .get(getCart);

router
    .route("/account/:account_id/item/:item_id")
    .delete(deleteItem)
    .patch(updateItem);

module.exports = router;