const express=require('express');
const {userRegistration} = require("../controller/userController");
const router=express.Router();


router.post("/userRegistration", userRegistration);

module.exports = router;
