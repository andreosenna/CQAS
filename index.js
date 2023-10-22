import express from 'express'
import bodyparser from 'body-parser'
import Posts from './Models/Posts.js';
import Path from 'path'
const app = express() 
const InstPost = new Posts() 

app.use(express.static(Path.join(__dirname,"public")))
const PORT = 3500
app.listen(PORT,()=>{
    console.log("servidor iniciado na porta",PORT);
})

app.get("/all",(rec,res)=>{
res.json(JSON.stringify(InstPost.getAll()))
})

app.post("/new",bodyparser.json(),(req,res)=>{
    let nome = req.body.nome
    let cargo = req.body.cargo

    InstPost.newPost(nome,cargo)
    
    res.send("post enviado")
    })

