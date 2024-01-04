const express = require("express")
const router = express.Router()

const {
    createFood,
    getFoods,
    updateFood,
    deleteFood
} = require("../controllers/food.controller")

router
    .route("/")
    .post(createFood)
    .get(getFoods);

router
    .route("/:id")
    .patch(updateFood)
    .delete(deleteFood);


module.exports = router;