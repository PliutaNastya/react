const express = require("express");
const router = express.Router();
const reviewController = require("../controllers/reviewController");
const { protect } = require("../middleware/authMiddleware");

router.post("/", protect, reviewController.addReview);
router.get("/:productId", reviewController.getReviews);

module.exports = router;
