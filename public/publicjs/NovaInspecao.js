const BDUsuarios = [
    {
        Matricula: 1,
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
    },
];

const BDProdutos = [
    {
        item: 1,
        Produto: "Mesa Monobloco",
        OP: 1,
        problema: "Gás",
        imagem: '<img src="./img/M17-mesa_quadrada.jpg" width="50px">',
        Status: "Aberto"
    },
    {
        item: 2,
        Produto: "Mesa Infantil",
        OP: 2,
        problema: "Cor Fora do Padrão",
        imagem: '<img src="./img/M47_mesa-infantil-azul.jpg" width="50px">',
        Status: "Aberto"
    },
    {
        item: 3,
        Produto: "Banqueta Escada",
        OP: 3,
        problema: "Cor Fora do Padrão",
        imagem: '<img src="./img/M15_1banqueta_escada_preta.jpg" width="50px">',
        Status: "Aberto"
    }
];

function carregarInspetor(){
    let options = document.getElementById("idSelectInspetor")
    
    BDUsuarios.forEach(elements =>{
        let op = document.createElement("option")
        op.value = elements.Matricula
        op.text = elements.Nome
        options.appendChild(op)

    })
    
}

function carregarProdutos(){
    let options = document.getElementById("idprodutos")
    
    BDProdutos.forEach(elements =>{
        let op = document.createElement("option")
        op.value = elements.item
        op.text = elements.Produto
        options.appendChild(op)

    })
    
}
carregarInspetor() 
carregarProdutos()