const Category = require("../models/Category");

exports.getAllCategories = async (req, res) => {
	const categories = await Category.find();
	res.json(categories);
};