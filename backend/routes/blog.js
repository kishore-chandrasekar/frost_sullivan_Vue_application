var express = require('express');
var router = express.Router();
var Blogs = require("../modules/Blogs");
/* GET users listing. */
router.post("/New", Blogs.create);
router.get("/", Blogs.blogs);
module.exports = router;
