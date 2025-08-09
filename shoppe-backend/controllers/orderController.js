const Order = require("../models/Order");

exports.createOrder = async (req, res) => {
	const { products, totalPrice, shippingAddress } = req.body;

	const order = await Order.create({
		user: req.user._id,
		products,
		totalPrice,
		shippingAddress,
	});

	res.status(201).json(order);
};

exports.getOrders = async (req, res) => {
	const orders = await Order.find({ user: req.user._id });
	res.json(orders);
};

exports.getOrderById = async (req, res) => {
	const order = await Order.findById(req.params.id);
	res.json(order);
};
