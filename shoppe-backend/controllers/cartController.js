const Cart = require("../models/Cart");

exports.getCart = async (req, res) => {
	const cart = await Cart.findOne({ user: req.user._id }).populate("products.product");
	res.json(cart || { products: [] });
};

exports.addToCart = async (req, res) => {
	const { productId, qty } = req.body;

	let cart = await Cart.findOne({ user: req.user._id });

	if (!cart) {
		cart = await Cart.create({
			user: req.user._id,
			products: [{ product: productId, qty }],
		});
	} else {
		const index = cart.products.findIndex(p => p.product.toString() === productId);
		if (index !== -1) {
			cart.products[index].qty += qty;
		} else {
			cart.products.push({ product: productId, qty });
		}
		await cart.save();
	}

	res.json(cart);
};

exports.removeFromCart = async (req, res) => {
	let cart = await Cart.findOne({ user: req.user._id });
	cart.products = cart.products.filter(
		p => p.product.toString() !== req.params.productId
	);
	await cart.save();

	res.json(cart);
};
