var usuarioModel = require("../models/usuarioModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA usuarioController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
    usuarioModel.listar()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function validacao_formulario(req, res) {
    var usuario = req.body.usuarioServer;
    var password = req.body.passwordServer;

    if (usuarioVar == undefined) {
        res.status(400).send("Seu usuario está undefined!");
    } else if (passwordVar == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.validacao_formulario(usuarioVar, passwordVar)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length == 1) {
                        console.log(resultado);
                        res.json(resultado[0]);
                    } else if (resultado.length == 0) {
                        res.status(403).send("Usuario e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}


function valida_cadastro(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
   var nameVar = req.body.nameServer;
   var lastnameVar = req.body.lastnameServer;
   var cpfVar = req.body.cpfServer;
   var telefoneVar = req.body.telefoneServer;
   var emailVar = req.body.emailServer;
   var usuarioVar = req.body.usuarioServer;
   var passwordVar = req.body.passwordServer;

  
    // Faça as validações dos valores
    if (nameVar == undefined) {
        res.status(400).send("Seu nome está undefined!");
    }
    else if (lastnameVar == undefined) {
        res.status(400).send("Seu sobrenome está undefined!");
    }
    else if (cpfVar == undefined) {
        res.status(400).send("Seu cpf está undefined!");
    }
    else if (telefoneVar == undefined) {
        res.status(400).send("Seu telefone está undefined!");
    }
    else if (emailVar == undefined) {
        res.status(400).send("Seu email está undefined!");
    }
    else if (usuarioVar == undefined) {
        res.status(400).send("Seu email está undefined!");
    }
    else if (passwordVar == undefined) {
        res.status(400).send("Sua senha está undefined!");
    }
    else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.valida_cadastro(nameVar, lastnameVar, cpfVar, telefoneVar, emailVar, usuarioVar, passwordVar)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    valida_cadastro,
    validacao_formulario,
    listar,
    testar
}