const mongoose = require("mongoose");

async function connectDB(){
    try {
        await mongoose.connect("mongodb://localhost:27017/food-order");
        console.log("connect db success");
    } catch(error){
        console.log("connect db fail: ", error.message);
    }
}

module.exports = connectDB;