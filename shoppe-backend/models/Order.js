const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
	user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
	products: [
		{
			product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
			qty: Number,
			price: Number,
		},
	],
	totalPrice: Number,
	status: { type: String, default: "new" },
	shippingAddress: String,
}, { timestamps: true });

module.exports = mongoose.model("Order", orderSchema);
