var express = require('express');
var router = express.Router();
var user = require("../modules/User");
/* GET users listing. */
router.post("/NewUser", user.NewUser);
router.post("/login", user.login);

module.exports = router;
