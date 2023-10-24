// TREINANDO CRIAR API 

import express from 'express';
import bodyparser from 'body-parser';
import Posts from './Models/Posts.js';
import Path from 'path';
import { fileURLToPath } from 'url'; // Importe fileURLToPath
import { log } from 'console';
const __filename = fileURLToPath(import.meta.url); // Obtenha __filename usando import.meta.url
const __dirname = Path.dirname(__filename); // Obtenha __dirname do __filename

const app = express();
const InstPost = new Posts();

app.use(express.static(Path.join(__dirname, "public")));
const PORT = 3500;

app.listen(PORT, () => {
  console.log("servidor iniciado na porta", PORT);
});

app.get("/all", (req, res) => {
  var result =  res.json(JSON.stringify(InstPost.getAll()));
  
});

app.post("/new", bodyparser.json(), (req, res) => {
  let nome = req.body.nome;
  let cargo = req.body.cargo;

  InstPost.newPost(nome, cargo);

  res.send("post enviado");
});


