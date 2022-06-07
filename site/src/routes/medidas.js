var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas", medidaController.buscarQtdAcertos);
//router.get("/ultimas2", medidaController.buscarUser);
router.get("/ultimas2", medidaController.buscardadosusuarios);

router.get("/tempo-real/:idAquario", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})

module.exports = router;