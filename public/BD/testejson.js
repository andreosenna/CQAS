import fs from 'fs';

const filePath = 'C:\\xampp\\htdocs\\CQAS\\public\\BD\\BD.json';

fs.readFile(filePath, 'utf8', (erro, data) => {
    if (erro) {
        console.log('Erro ao ler JSON', erro);
    } else {
        try {
            const produtos = JSON.parse(data);
            produtos.forEach(element => {
                console.log(element);
            });
        } catch (parseError) {
            console.log('Erro ao analisar JSON', parseError);
        }
    }
});

