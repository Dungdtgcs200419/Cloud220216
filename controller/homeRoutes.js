
const express = require("express");

router = express.Router();

router.get("/" , (req,res) => {
    content = fs.readFileSync("../views/home.html");
    res.end(content);
} );

module.exports = router;