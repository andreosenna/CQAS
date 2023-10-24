const Itens=[
    {
        Codigo: 1,
        Produtos: "Cadeira A",
        Familia: "moveis",
        Quantidade: 1200
    },
    {
        Codigo: 2,
        Produtos: "Mesa",
        Familia: "moveis",
        Quantidade: 300
    },
    {
        Codigo: 3,
        Produtos: "Banqueta",
        Familia: "moveis",
        Quantidade: 3000
    },
    {
        Codigo: 4,
        Produtos: "Espreguiçadeira",
        Familia: "moveis",
        Quantidade: 200
    },
    {
        Codigo: 5,
        Produtos: "Pa de lixo",
        Familia: "utilidades",
        Quantidade: 50
    },
    {
        Codigo: 6,
        Produtos: "Lixiera",
        Familia: "utilidades",
        Quantidade: 50
    },
    {
        Codigo: 7,
        Produtos: "Bacia",
        Familia: "utilidades",
        Quantidade: 75
    }
]

const Usuarios =[
    {Id:1,Nome:"Andre",Funcao:"Analista",Nivel:"adm",Status:"ativo"},
    {Id:2,Nome:"Joao",Funcao:"Inspetor",Nivel:"iql",Status:"ativo"},
    {Id:3,Nome:"Carlos",Funcao:"Inspetor",Nivel:"iql",Status:"ativo"},
    {Id:4,Nome:"Maria",Funcao:"Diretor",Nivel:"adm",Status:"ativo"}
    ]
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

const Inspecoes = [
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

export {Usuarios,Itens, BDUsuarios,Inspecoes}