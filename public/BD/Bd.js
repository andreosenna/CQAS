const Itens = [
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

const Usuarios = [
    { Id: 1, Nome: "Andre", Funcao: "Analista", Nivel: "adm", Status: "ativo" },
    { Id: 2, Nome: "Joao", Funcao: "Inspetor", Nivel: "iql", Status: "ativo" },
    { Id: 3, Nome: "Carlos", Funcao: "Inspetor", Nivel: "iql", Status: "ativo" },
    { Id: 4, Nome: "Maria", Funcao: "Diretor", Nivel: "adm", Status: "ativo" }
]

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

const RNCS = [
    { id: 1, Status: "Aberta", Descricao: "Falha na peça", Responsavel: "Andre", dtCriação: "01/01/2023" },
    { id: 2, Status: "fechada", Descricao: "Falha injeção", Responsavel: "Andre", dtCriação: "02/01/2023" }
]

const OPS = [
    {
        NOP: 1,
        Tipo:"Injeção",
        Produto: "Cadeira Boa Vista",
        Emissao: "01/10/2023",
        qProgramada: 2000,
        qProduzida: 980,
        qPendente: 1020,
        Status: "Pendente",
    },
    {
        NOP: 2,
        Tipo:"Injeção",
        Produto: "Banqueta Araxá",
        Emissao: "02/10/2023",
        qProgramada: 1000,
        qProduzida: 80,
        qPendente: 920,
        Status: "Pendente",
    },
    {
        NOP: 3,
        Tipo:"Injeção",
        Produto: "Bacia 6L",
        Emissao: "01/10/2023",
        qProgramada: 500,
        qProduzida: 280,
        qPendente: 220,
        Status: "Pendente",
    },
    {
        NOP: 4,
        Tipo:"Montagem",
        Produto: "Estante Super",
        Emissao: "01/10/2023",
        qProgramada: 200,
        qProduzida: 70,
        qPendente: 130,
        Status: "Pendente",
    },
    {NOP:5,
        Tipo:"Injeçao",
        Produto:"Lixeira 7L",
        Emissao:"01/10/2023",
        qProgramada:7000,
        qProduzida:0,
        qPendente: 7000,
        Status:"Iniciar",
        }
]
export { Usuarios, Itens, BDUsuarios, Inspecoes, RNCS,OPS }
/*


*/