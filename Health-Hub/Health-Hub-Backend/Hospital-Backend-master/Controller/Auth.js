const express = require("express");
const {login} = require("../Services/Auth");
const router = express.Router();

router.post('/login',async(req,res)=>{
    try {
        const response = await login(req.body.email,req.body.password)
        
        res.status(response.status).json(response.data)
       
        } catch (error) {
            res.status(500).json({"message": error.message,"status": "false", "source": "Auth controller", "error" : error})
        }
})


module.exports = router;