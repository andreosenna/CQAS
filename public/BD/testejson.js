/*
tentativa 1 

import fs from 'fs';

// Usando barras invertidas duplas
const filePath = 'c:\\xampp\\htdocs\\CQAS\\Bd.json';

// OU usando barras invertidas simples
// const filePath = 'c:/xampp/htdocs/CQAS/Bd.json';

fs.readFile(filePath, 'utf8', (erro, data) => {
    if (erro) {
        console.log('Erro ao ler JSON', erro);
    } else {
        try {
            const produtos = JSON.parse(data);
            produtos.array.forEach(element => {
                console.log(element);
            });
        } catch (parseError) {
            console.log('Erro ao analisar JSON', parseError);
        }
    }
});*/
/*
tentativa 2
import fs from 'fs'

var jsonData = fs.readFileSync("c:\\xampp\\htdocs\\CQAS\Bd.json", "utf8");
console.log(jsonData);
*/
/*
teste 3 
import fs from 'fs';
const File = fs.readFileSync('BD.json', 'utf8');
var jsFile = JSON.parse(File)
console.log(jsFile);
*/
import {Itens} from './Bd.js'


console.log(Itens)
