var medidaModel = require("../models/medidaModel");

function buscarQtdAcertos(req, res) {
  medidaModel
    .buscarQtdAcertos()
    .then((resultado) => {
      if (resultado.length > 0) {
        res.status(200).json(resultado);
      } else {
        res.status(204).send("Nenhum resultado encontrado!");
      }
    })
    .catch(function (erro) {
      console.log(erro);
      console.log(
        "Houve um erro ao buscar as ultimas medidas.",
        erro.sqlMessage
      );
      res.status(500).json(erro.sqlMessage);
    });
}

function buscardadosusuarios(req, res) {
  medidaModel
    .buscarUser()
    .then((response) => {
      const tamanho = response.length;
      if (tamanho > 0) {
        res.json({ response });
      }
    })
    .catch(function (erro) {
      console.log(erro);
      console.log(
        "Houve um erro ao buscar as ultimas medidas.",
        erro.sqlMessage
      );
      res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
  buscarQtdAcertos,
  buscardadosusuarios,
};
