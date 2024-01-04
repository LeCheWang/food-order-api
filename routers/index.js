const categoryRouter = require("./category.router");
const foodRouter = require("./food.router");
const accountRouter = require("./account.router");

module.exports = (app) => {
    app.use("/api/categories", categoryRouter);
    app.use("/api/foods", foodRouter);
    app.use("/api/accounts", accountRouter);
}