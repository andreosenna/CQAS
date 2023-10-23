const Usuarios =[
    {Id:1,Nome:"Andre",Funcao:"Analista",Nivel:"adm",Status:"ativo"},
    {Id:2,Nome:"Joao",Funcao:"Inspetor",Nivel:"iql",Status:"ativo"}
    ]
    
  
    const tabela = document.getElementById('tabelaUsuarios');
    
    function iniciarTabela() {
        const tbody = tabela.querySelector('tbody');
        Usuarios.forEach(item => {
            var linha = tbody.insertRow(tbody.rows.length-1);
            var linha1 = linha.insertCell(0);
            var linha2 = linha.insertCell(1);
            var linha3 = linha.insertCell(2);
            var linha4 = linha.insertCell(3);
            var linha5 = linha.insertCell(4);
         
    
            linha1.innerHTML = item.Id;
            linha2.innerHTML = item.Nome;
            linha3.innerHTML = item.Funcao;
            linha4.innerHTML = item.Nivel;
            linha5.innerHTML = item.Status;
            
        });
    }
    iniciarTabela()
    