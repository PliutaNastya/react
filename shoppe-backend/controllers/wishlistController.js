const Wishlist = require("../models/Wishlist");

exports.getWishlist = async (req, res) => {
	const wishlist = await Wishlist.findOne({ user: req.user._id }).populate("products");
	res.json(wishlist || { products: [] });
};

exports.addToWishlist = async (req, res) => {
	const { productId } = req.body;

	let wishlist = await Wishlist.findOne({ user: req.user._id });

	if (!wishlist) {
		wishlist = await Wishlist.create({
			user: req.user._id,
			products: [productId],
		});
	} else {
		if (!wishlist.products.includes(productId)) {
			wishlist.products.push(productId);
			await wishlist.save();
		}
	}

	res.json(wishlist);
};

exports.removeFromWishlist = async (req, res) => {
	let wishlist = await Wishlist.findOne({ user: req.user._id });
	wishlist.products = wishlist.products.filter(
		p => p.toString() !== req.params.productId
	);
	await wishlist.save();

	res.json(wishlist);
};
