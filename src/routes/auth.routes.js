const express =  require('express');
const authController = require("../controllers/auth.controller");


const router = express.Router();

router.post("/register", (req,res)=>{
    const {username , email , password}= req.body;


})

module.exports  = router;