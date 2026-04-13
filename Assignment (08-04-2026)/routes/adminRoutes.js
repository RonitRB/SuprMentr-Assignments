const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");

router.get("/dashboard", protect, authorizeRoles("admin"), (req, res) => {
  res.json({ message: "Welcome to Admin Dashboard" });
});

router.get("/profile", protect, (req, res) => {
  res.json({ message: "User profile accessed successfully", user: req.user });
});

module.exports = router;
