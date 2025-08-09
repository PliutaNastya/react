const BlogPost = require("../models/BlogPost");

exports.getAllPosts = async (req, res) => {
	const posts = await BlogPost.find();
	res.json(posts);
};

exports.getPostBySlug = async (req, res) => {
	const post = await BlogPost.findOne({ slug: req.params.slug });
	res.json(post);
};
