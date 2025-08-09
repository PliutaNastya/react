const Contact = require("../models/Contact");
const nodemailer = require("nodemailer");

exports.sendMessage = async (req, res) => {
	const { name, email, message } = req.body;

	await Contact.create({ name, email, message });

	let transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: process.env.EMAIL_USER,
			pass: process.env.EMAIL_PASS,
		},
	});

	await transporter.sendMail({
		from: email,
		to: process.env.EMAIL_USER,
		subject: "New Contact Message",
		text: message,
	});

	res.json({ message: "Message sent!" });
};
