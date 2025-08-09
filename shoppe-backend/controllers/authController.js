const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
	const { name, email, password } = req.body;

	const userExists = await User.findOne({ email });
	if (userExists) {
		return res.status(400).json({ message: "User already exists" });
	}

	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(password, salt);

	const user = await User.create({
		name,
		email,
		password: hashedPassword,
	});

	const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
		expiresIn: "30d",
	});

	res.status(201).json({
		_id: user._id,
		name: user.name,
		email: user.email,
		token,
	});
};

exports.login = async (req, res) => {
	const { email, password } = req.body;

	const user = await User.findOne({ email });
	if (!user) {
		return res.status(401).json({ message: "Invalid email or password" });
	}

	const isMatch = await bcrypt.compare(password, user.password);
	if (!isMatch) {
		return res.status(401).json({ message: "Invalid email or password" });
	}

	const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
		expiresIn: "30d",
	});

	res.json({
		_id: user._id,
		name: user.name,
		email: user.email,
		token,
	});
};

exports.getMe = async (req, res) => {
	res.json(req.user);
};
