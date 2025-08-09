const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
	title: String,
	description: String,
	price: Number,
	oldPrice: Number,
	isNew: Boolean,
	isOnSale: Boolean,
	isOutOfStock: Boolean,
	rating: Number,
	sku: String,
	images: [String],
	categories: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category" }],
	attributes: {
		color: String,
		size: String,
		material: String,
	},
	similarProducts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
	reviews: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Review",
		},
	],
}, { timestamps: true });

module.exports = mongoose.model("Product", productSchema);
