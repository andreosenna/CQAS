//o Import conforme o ES6 já funciona como uma const
// importação do express
import express from 'express'
// importando o body-parser para recuperar o body do http
import bodyparser from 'body-parser'


const app = express() // iniciand a funçãoo express através da constante app

const PORT = 3000 // declara a porta e manda o express ouvi-la
app.listen(PORT,()=>{
    console.log("servidor iniciado na porta",PORT);
})

// criar o objeto posts dentro do servidor
let posts  = [
    {id:1,nome:"Andre",cargo:"Adm"},
    {id:2,nome:"Maira",cargo:"Supervisora"}
]

// realizar uma busca no servidor utilizando a rota "/all"
app.get("/all",(rec,res)=>{
res.json(JSON.stringify(posts))
})

//realizar uma postagem no servidor utilizando a rota "/new"
app.post("/new",bodyparser.json(),(req,res)=>{
    let id = genRadnon()
    let nome = req.body.nome
    let cargo = req.body.cargo
    posts.push({id,nome,cargo})
    res.send("post enviado")
    })

function genRadnon(){

    var numRand = Math.random().toString(36).substring(2,9)
    return numRand
    console.log(numRand);
}
