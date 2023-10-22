const BDUsuarios = [
   
    {  Matricula: 1,
        Nome: 'Andre',
        Função: 'adm',
        Status: "Ativo"
    },
    {
        Matricula: 2,
        Nome: 'Fabio',
        Função: 'Inspetor',
        Status: "Ativo"
    },
    {
        Matricula: 3,
        Nome: 'Icor',
        Função: 'Qualidade',
        Status: "Ativo"
    },
    {
        Matricula: 4,
        Nome: 'Claudio',
        Função: 'Laboratorio',
        Status: "Ativo"
    },
    {
        Matricula: 5,
        Nome: 'Anderson',
        Função: 'Inspetor',
        Status: "Ativo"
    },
    {
        Matricula: 6,
        Nome: 'Rafael',
        Função: 'Inspetor',
        Status: "Inativo"
    }]

function carregarInspetor(){
    let options = document.getElementById("idSelectInspetor")
    
    BDUsuarios.forEach(elements =>{
        let op = document.createElement("option")
        op.value = elements.Matricula
        op.text = elements.Nome
        options.appendChild(op)

    })
}
  carregarInspetor() 
