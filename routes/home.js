const express = require("express");
const router = express.Router();


router.get("/", (req, res) =>{
    const frutas = [
        {primero: "papaya", segundo:"pera"},
        {primero: "sandia", segundo: "melocoton"}
    ]
    res.render("home",{titulo:"como estas", frut:frutas})
})


// importante agregar para las rutas
module.exports = router;