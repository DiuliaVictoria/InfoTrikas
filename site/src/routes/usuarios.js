var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.valida_cadastro(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.validacao_formulario(req, res);
});

router.post("/armazenarResultado", function (req, res) {
    usuarioController.armazenarResultado(req, res);
});

module.exports = router;