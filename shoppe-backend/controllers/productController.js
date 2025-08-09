const Product = require("../models/Product");

exports.getAllProducts = async (req, res) => {
	try {
		const { limit, sort } = req.query;

		let query = Product.find().populate("categories");

		// сортировка, если пришёл параметр sort
		if (sort === "latest") {
			query = query.sort({ createdAt: -1 });
		}

		// лимитирование количества, если пришёл параметр limit
		if (limit) {
			query = query.limit(Number(limit));
		}

		const products = await query;
		res.json(products);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: error.message });
	}
};
 

exports.getProductById = async (req, res) => {
	try {
		const product = await Product.findById(req.params.id)
			.populate({
				path: "reviews",
				populate: {
					path: "user",
					select: "name",
				}
			})
			.populate("categories");

		if (!product) {
			return res.status(404).json({ message: "Product not found" });
		}

		res.json(product);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: error.message });
	}
};
