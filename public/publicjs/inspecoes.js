import {Inspecoes} from '../BD/Bd.js'

const tabela = document.getElementById('tabela1');
function iniciarTabela() {
    const ver = '<input type="button" value="ver">';
    const tbody = tabela.querySelector('tbody');
    
    Inspecoes.forEach(item => {
        
        var linha = tbody.insertRow(tbody.rows.length-1);
        var linha1 = linha.insertCell(0);
        var linha2 = linha.insertCell(1);
        var linha3 = linha.insertCell(2);
        var linha4 = linha.insertCell(3);
        var linha5 = linha.insertCell(4);
        var linha6 = linha.insertCell(5);
        var linha7 = linha.insertCell(6);
        linha1.innerHTML = item.item;
        linha2.innerHTML = item.Produto;
        linha3.innerHTML = item.OP;
        linha4.innerHTML = item.problema;
        linha5.innerHTML = item.imagem;
        linha6.innerHTML = ver;
        linha7.innerHTML = item.Status;
    });
}
document.addEventListener("DOMContentLoaded", function() {
    iniciarTabela();
});

const btNovoItem = document.getElementById('btfazer')
btNovoItem.addEventListener('click',novoItem)
function novoItem() {
    const Codigo = document.getElementById("idCodigo").value;
    const Descricao = document.getElementById("idDescricao").value;
    const OP = document.getElementById("idOP").value;
    const Problema = document.getElementById("idProblema").value;
    const Imagem = document.getElementById("idImagem").value;
    const Status = document.getElementById("idStatus").value;

    let novoObjetoBD = {
        item: Codigo,
        Produto: Descricao,
        OP: OP,
        problema: Problema,
        imagem: Imagem,
        Status: Status
    };

    Inspecoes.push(novoObjetoBD);

    // Adicione apenas o novo item à tabela
    var linha = tabela.querySelector('tbody').insertRow(tabela.rows.length - 1); // -1 para evitar duplicação
    var linha1 = linha.insertCell(0);
    var linha2 = linha.insertCell(1);
    var linha3 = linha.insertCell(2);
    var linha4 = linha.insertCell(3);
    var linha5 = linha.insertCell(4);
    var linha6 = linha.insertCell(5);
    var linha7 = linha.insertCell(6);
    linha1.innerHTML = novoObjetoBD.item;
    linha2.innerHTML = novoObjetoBD.Produto;
    linha3.innerHTML = novoObjetoBD.OP;
    linha4.innerHTML = novoObjetoBD.problema;
    linha5.innerHTML = novoObjetoBD.imagem;
    linha6.innerHTML = '<input type="button" value="ver">';
    linha7.innerHTML = novoObjetoBD.Status;
    console.log(Inspecoes);
}
