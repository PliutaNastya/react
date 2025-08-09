const Review = require("../models/Review");
const Product = require("../models/Product");

exports.addReview = async (req, res) => {
	const { productId, rating, comment } = req.body;

	const review = await Review.create({
		product: productId,
		user: req.user._id,
		rating,
		comment,
	});

	await Product.findByIdAndUpdate(productId, {
		$push: { reviews: review._id },
	});

	res.json(review);
};

exports.getReviews = async (req, res) => {
	const reviews = await Review.find({ product: req.params.productId }).populate("user", "name");
	res.json(reviews);
};
