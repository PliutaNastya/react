const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
	user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
	products: [
		{
			product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
			qty: Number,
		},
	],
}, { timestamps: true });

module.exports = mongoose.model("Cart", cartSchema);
