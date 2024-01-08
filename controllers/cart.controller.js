const cartModel = require("../models/cart.model");

module.exports = {
    addToCart: async(req, res)=>{
        const {account_id, food_id, quantity} = req.body;
        let cart = await cartModel.findOne({
            account_id: account_id,
            is_order: false
        })

        //nếu lần đầu thêm vào giỏ hàng
        if (!cart){
            cart = await cartModel.create({
                account_id: account_id,
                items: [{food: food_id, quantity: quantity || 1}]
            });
        } else {
            const items = cart.items;
            items.push({food: food_id, quantity: quantity || 1});
            cart = await cartModel.findByIdAndUpdate(cart._id, {items}, {new: true});
        }

        return res.status(201).json(cart);
    }
}