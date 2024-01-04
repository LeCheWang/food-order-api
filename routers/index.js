const categoryRouter = require("./category.router");
const foodRouter = require("./food.router");

module.exports = (app) => {
    app.use("/api/categories", categoryRouter);
    app.use("/api/foods", foodRouter);
}