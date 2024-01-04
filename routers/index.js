const categoryRouter = require("./category.router");

module.exports = (app) => {
    app.use("/api/categories", categoryRouter);
}