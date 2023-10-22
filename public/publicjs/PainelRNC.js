const RNCS =[
{id:1,Status:"Aberta",Descricao:"Falha na peça",Responsavel:"Andre",dtCriação:"01/01/2023"},
{id:2,Status:"fechada",Descricao:"Falha injeção",Responsavel:"Andre",dtCriação:"02/01/2023"}
]

const tabela = document.getElementById('tabelaRNCs');

function iniciarTabela() {
    const tbody = tabela.querySelector('tbody');
    RNCS.forEach(item => {
        var linha = tbody.insertRow(tbody.rows.length-1);
        var linha1 = linha.insertCell(0);
        var linha2 = linha.insertCell(1);
        var linha3 = linha.insertCell(2);
        var linha4 = linha.insertCell(3);
        var linha5 = linha.insertCell(4);
        var linha6 = linha.insertCell(5);

        linha1.innerHTML = item.id;
        linha2.innerHTML = item.Status;
        linha3.innerHTML = item.Descricao;
        linha4.innerHTML = item.Responsavel;
        linha5.innerHTML = item.dtCriação;
        linha6.innerHTML = '<input type="button" value="Abrir">'
    });
}
iniciarTabela()
