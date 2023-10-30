import Parse from 'parse/node.js'
import Express from 'express'
const app =  Express()
const APP_ID = 'chave da api'
const JAVASCRIPT_ID= 'chave do javascript'
const REST_API ='chave rest'
Parse.initialize(APP_ID,JAVASCRIPT_ID)
Parse.serverURL='https://parseapi.back4app.com/'

const classeProdutos = Parse.Object.extend('Produtos')
const cProdutos = new classeProdutos()
const cProdutosQuery = new Parse.Query(classeProdutos)

app.get('/',(req,res)=>{
    cProdutosQuery.find().then((Obj)=>{
        const resultado = Obj
        res.json(Obj)
    })
    
})
const PORT = process.env.PORT || 4000
app.listen(PORT,()=>{
    console.log("server is running")
})
