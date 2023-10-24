import { OPS } from '../BD/Bd.js';

const tabela = document.getElementById('tabelaOP')

function iniciarTabela() {
    const tbody = tabela.querySelector('tbody')
    OPS.forEach(item => {
        var linha = tbody.insertRow()
        var linha1 = linha.insertCell(0)
        var linha2 = linha.insertCell(1)
        var linha3 = linha.insertCell(2)
        var linha4 = linha.insertCell(3)
        var linha5 = linha.insertCell(4)
        var linha6 = linha.insertCell(5)
        var linha7 = linha.insertCell(6)
        var linha8 = linha.insertCell(7)
        var linha9 = linha.insertCell(8)

        linha1.innerHTML = item.NOP
        linha2.innerHTML = item.Tipo
        linha3.innerHTML = item.Produto
        linha4.innerHTML = item.Emissao
        linha5.innerHTML = item.qProgramada
        linha6.innerHTML = item.qProduzida
        linha7.innerHTML = item.qPendente
        linha8.innerHTML = item.Status
        linha9.innerHTML = '<input type="button" value="ver">'
        
    });

}
document.addEventListener("DOMContentLoaded", function () {
    iniciarTabela();
});