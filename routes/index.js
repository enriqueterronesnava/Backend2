const express = require("express");
const router = express.Router();

router.use("/", require("./swagger"));
router.use("/inv", require("./inv"));

module.exports = router;
