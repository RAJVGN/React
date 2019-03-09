const express = require("express");
const router = express.Router();

//@route    GET api/profile/test
//@acess    Public
router.get("/test", (req, res) => {
  res.status(200).json({ message: "all looks ggod on profile" });
});

module.exports = router;
