const categoryRouter = require("./category.router");
const foodRouter = require("./food.router");
const accountRouter = require("./account.router");
const cartRouter = require("./cart.router");
const orderRouter = require("./order.router");

module.exports = (app) => {
    app.use("/api/categories", categoryRouter);
    app.use("/api/foods", foodRouter);
    app.use("/api/accounts", accountRouter);
    app.use("/api/cart", cartRouter);
    app.use("/api/order", orderRouter);
}