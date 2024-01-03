const mongoose = require("mongoose")

const cartScheme = mongoose.Schema({
    is_order: {
        type: Boolean,
        default: false
    },
    account_id: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "account"
    },
    items: [
        {
            food: {
                type: mongoose.SchemaTypes.ObjectId,
                ref: "food"
            },
            quantity: {
                type: Number,
                default: 1
            }
        }
    ]
})

module.exports = mongoose.model("cart", cartScheme);