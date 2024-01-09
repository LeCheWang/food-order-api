const orderModel = require("../models/order.model");
const cartModel = require("../models/cart.model");

module.exports = {
    createOrder: async (req, res) =>{
        const body = req.body;
        const order = await orderModel.create(body);
        await cartModel.findByIdAndUpdate(body.cart_id, {is_order: true});
        
        return res.status(201).json(order);
    },
    getOrder: async (req, res) => {
        const customer = req.query.customer;
        const address = req.query.address;
        const phone = req.query.phone;
        const status = req.query.status;

        const body_query = {};

        if (customer){
            body_query.customer = {
                $regex: ".*" + customer + ".*"
            };
        }

        if (address){
            body_query.address = {
                $regex: ".*" + address + ".*"
            };
        }

        if (phone){
            body_query.phone = phone;
        }

        if (status){
            body_query.status = status;
        }

        const orders = await orderModel.find(body_query).populate({
            path: "cart_id",
            populate: [
                {
                    path: "account_id"
                },
                {
                    path: "items.food"
                }
            ]
        });

        return res.status(200).json(orders);
    }
}