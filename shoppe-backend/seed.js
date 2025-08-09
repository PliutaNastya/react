const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("./models/Product");
const Category = require("./models/Category");
const Review = require("./models/Review");
const User = require("./models/User");

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
	.then(() => console.log("MongoDB connected"))
	.catch((err) => console.error(err));

const seed = async () => {
	try {
		// Очистимо колекції
		await Product.deleteMany();
		await Category.deleteMany();
		await Review.deleteMany();
		await User.deleteMany();

		// Створимо категорії
		const categories = await Category.insertMany([
			{
				name: "Hair Pin",
				// image: "/images/category-hairpin.jpg",
				productsCount: 0,
			},
			{
				name: "Earrings",
				// image: "/images/category-earrings.jpg",
				productsCount: 0,
			},
			{
				name: "Necklace",
				// image: "/images/category-necklace.jpg",
				productsCount: 0,
			},
		]);

		// Створимо продукти
		const products = [
			{
				title: "Lira Earrings",
				description:
					"Elegant round earrings made of high-quality metal, perfect for any occasion.",
				price: 20.00,
				oldPrice: 25.00,
				isNew: true,
				isOnSale: true,
				isOutOfStock: false,
				rating: 4.8,
				sku: "EAR-LIRA-001",
				images: ["/images/products/earrings/01.jpg"],
				categories: [categories[1]._id],
				attributes: {
					color: "Gold",
					weight: "0.3 kg",
					dimensions: "15 x 10 x 1 cm",
					material: "Metal",
				},
			},
			{
				title: "Hal Earrings",
				description:
					"Stylish modern earrings with a unique oval shape.",
				price: 25.00,
				isNew: false,
				isOnSale: false,
				isOutOfStock: false,
				rating: 4.2,
				sku: "EAR-HAL-001",
				images: ["/images/products/earrings/02.jpg"],
				categories: [categories[1]._id],
				attributes: {
					color: "Gold",
					weight: "0.2 kg",
					dimensions: "10 x 8 x 1 cm",
					material: "Metal",
				},
			},
			{
				title: "Plaine Necklace",
				description:
					"Minimalistic necklace with a delicate pendant.",
				price: 19.00,
				oldPrice: null,
				isNew: false,
				isOnSale: false,
				isOutOfStock: true,
				rating: 4.0,
				sku: "NECK-PLAIN-001",
				images: ["/images/products/necklace/01.jpg"],
				categories: [categories[2]._id],
				attributes: {
					color: "Gold",
					weight: "0.1 kg",
					dimensions: "20 x 15 x 0.5 cm",
					material: "Metal",
				},
			},
			{
				title: "Yuki Hair Pin Set of 3",
				description:
					"Set of elegant gold hair pins perfect for styling.",
				price: 29.00,
				oldPrice: 34.00,
				isNew: true,
				isOnSale: true,
				isOutOfStock: false,
				rating: 4.5,
				sku: "HAIR-YUKI-001",
				images: ["/images/products/hairpin/01.jpg"],
				categories: [categories[0]._id],
				attributes: {
					color: "Gold",
					weight: "0.05 kg",
					dimensions: "5 x 1 x 0.5 cm",
					material: "Metal",
				},
			},
			{
				title: "Kaede Hair Pin Set Of 3",
				description:
					"Set of elegant gold hair pins perfect for styling.",
				price: 30.00,
				oldPrice: 34.00,
				isNew: true,
				isOnSale: true,
				isOutOfStock: false,
				rating: 4.5,
				sku: "HAIR-YUKI-001",
				images: ["/images/products/hairpin/02.jpg"],
				categories: [categories[0]._id],
				attributes: {
					color: "Gold",
					weight: "0.05 kg",
					dimensions: "5 x 1 x 0.5 cm",
					material: "Metal",
				},
			},
			{
				title: "Hair Pin Set of 3",
				description:
					"Set of elegant gold hair pins perfect for styling.",
				price: 30.00,
				oldPrice: 34.00,
				isNew: true,
				isOnSale: true,
				isOutOfStock: false,
				rating: 4.5,
				sku: "HAIR-YUKI-001",
				images: ["/images/products/hairpin/03.jpg"],
				categories: [categories[0]._id],
				attributes: {
					color: "Gold",
					weight: "0.05 kg",
					dimensions: "5 x 1 x 0.5 cm",
					material: "Metal",
				},
			},
		];

		const createdProducts = await Product.insertMany(products);

		// Створимо користувача
		const user = await User.create({
			name: "John Tester",
			email: "john@example.com",
			password: "password123",
		});

		// Створимо відгуки
		const reviews = [
			{
				product: createdProducts[0]._id,
				user: user._id,
				rating: 5,
				comment: "Дуже красиві сережки, виглядають дорого!",
			},
			{
				product: createdProducts[1]._id,
				user: user._id,
				rating: 4,
				comment: "Стильні сережки, але трохи важкі.",
			},
			{
				product: createdProducts[2]._id,
				user: user._id,
				rating: 3,
				comment: "Намисто красиве, але замалий кулон.",
			},
			{
				product: createdProducts[3]._id,
				user: user._id,
				rating: 5,
				comment: "Ідеальні шпильки для волосся!",
			},
		];

		const createdReviews = await Review.insertMany(reviews);

		// Додамо відгуки до продуктів
		for (const review of createdReviews) {
			await Product.findByIdAndUpdate(review.product, {
				$push: { reviews: review._id },
			});
		}

		// Оновимо кількість товарів у категоріях
		for (const category of categories) {
			const count = createdProducts.filter((p) =>
				p.categories.includes(category._id)
			).length;
			category.productsCount = count;
			await category.save();
		}

		console.log("Data seeded successfully!");
		process.exit();
	} catch (err) {
		console.error(err);
		process.exit(1);
	}
};

seed();
