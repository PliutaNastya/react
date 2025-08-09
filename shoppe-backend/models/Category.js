const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
	name: String,
	image: String,
	productsCount: Number
});

module.exports = mongoose.model("Category", categorySchema);
