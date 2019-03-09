const express = require("express");
const router = express.Router();

//@route    GET api/user/test
//@acess    Public
router.get("/test", (req, res) => {
  res.status(200).json({ message: "users words" });
});

module.exports = router;
