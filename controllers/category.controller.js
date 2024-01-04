const categoryModel = require("../models/category.model")

module.exports = {
    createCategory: async (req, res) => {
        const body = req.body;
        const newCategory = await categoryModel.create(body);
        return res.status(201).json(newCategory);
    },
    getCategories: async (req, res) => {
        const categories = await categoryModel.find();
        return res.status(200).json(categories);
    }
}