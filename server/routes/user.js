const express = require("express");
const router = express.Router();

//MODELS
const { User } = require("../models/user");

////
router.post("/register", (req, res) => {
  const user = new User(req.body);

  user.save((err, doc) => {
    if (err) return res.json({ success: false });
    res.status(200).json({
      success: true,
      user: doc,
    });
  });
  console.log("works");
});

modules.exports = router;
