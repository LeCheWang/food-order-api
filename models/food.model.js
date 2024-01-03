const mongoose = require("mongoose");

const foodSchame = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        requried: true
    },
    img: {
        type: String,
        required: true
    },
    address: {
        type: String,
        requried: true
    },
    category_id: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "category"
    }
})

module.exports = mongoose.model("food", foodSchame);