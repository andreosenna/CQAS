import { BDProdutos } from '../BD/Bd.js';

const tabela = document.getElementById('tabelaProdutos')

function iniciarTabela() {
    const tbody = tabela.querySelector('tbody')
    BDProdutos.forEach(item => {
        var linha = tbody.insertRow()
        var linha1 = linha.insertCell(0)
        var linha2 = linha.insertCell(1)
        var linha3 = linha.insertCell(2)
        var linha4 = linha.insertCell(3)
        var linha5 = linha.insertCell(4)
        var linha6 = linha.insertCell(5)
        var linha7 = linha.insertCell(6)
        var linha8 = linha.insertCell(7)
      

        linha1.innerHTML = item.Codigo
        linha2.innerHTML = item.Descricao
        linha3.innerHTML = item.CodERP
        linha4.innerHTML = item.PH
        linha5.innerHTML = item.Ciclo
        linha6.innerHTML = item.PesoPadrao
        linha7.innerHTML = item.Imagem
        linha8.innerHTML = item.Status
             
    });

}
document.addEventListener("DOMContentLoaded", function () {
    iniciarTabela();
});

/*
Application ID:"80x2YuBsDmDhpRl9eGnxtubELifvJkwuAiwptyce
JavaScript key:"7hgW4WU5XzSbVmOqhBz7lOoOr9QlFqEl7mowXNyq"
REST API key:"0XcGkHxIYVnYJDZIJ0QDr06OA54OGdc5vPeSIuys"

"

*/
