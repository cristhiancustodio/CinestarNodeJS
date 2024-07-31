const router = require("express").Router();
const prueba = require("../controller/Prueba.js")

router.get("/",prueba.inicio);
router.get("/inicio",prueba.inicio);
router.get("/segundo",prueba.segundoInicio);

module.exports = router;
