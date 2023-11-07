const express = require("express");
const router = express.Router();

router.get("/cine",(req, res)=>{
    res.render("cine");
})


module.exports = router;
