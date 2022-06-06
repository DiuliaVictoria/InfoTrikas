var database = require("../database/config");

function buscarQtdAcertos() {
    const query = `
    SELECT qntd_acertos AS "quantidadeAcertos", COUNT(qntd_acertos) AS "quantidadeJogadas" 
    FROM quiz GROUP BY qntd_acertos ORDER BY qntd_acertos ASC;`

return  database.executar(query)
}



module.exports = {
    buscarQtdAcertos
   
}