const express = require("express");
const router = express.Router();

//@route    GET api/posts/test
//@acess    Public
router.get("/test", (req, res) => {
  res.status(200).json({ message: "posts looks good" });
});

module.exports = router;
