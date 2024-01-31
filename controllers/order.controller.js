const orderModel = require("../models/order.model");
const cartModel = require("../models/cart.model");
const mongoose = require("mongoose");

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
    },
    getOrderByAccount: async(req, res)=>{
        const account_id = req.params.account_id;
        const carts = await cartModel.find({account_id, is_order: true});
         
        const orders = [];
        
        for (let cart of carts){
            const order = await orderModel.findOne({
                cart_id: cart._id
            }).populate({
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

            orders.push(order);
        }

        return res.status(200).json(orders);
    }
}