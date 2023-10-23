import fs from 'fs'

fs.readFile('Bd.json','utf8',(erro,data)=>{
    if(erro){
        console.log('erro a ler Json',erro)
    } const produtos =JSON.parse(data)
    produtos.array.forEach(element => {
        console.log(produtos.element)
    });

})
