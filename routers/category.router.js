const express = require("express");
const router = express.Router();

const {
    createCategory,
    getCategories
} = require("../controllers/category.controller");

router
    .route("/")
    .post(createCategory)
    .get(getCategories);

module.exports = router;