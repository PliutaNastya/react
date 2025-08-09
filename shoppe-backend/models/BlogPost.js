const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
	title: String,
	content: String,
	image: String,
	slug: String,
}, { timestamps: true });

module.exports = mongoose.model("BlogPost", blogSchema);
