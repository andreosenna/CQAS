import Parse from 'parse'
import Express from 'express'
import Cors from 'cors'
const router =  Express.Router()

router.use(cors())
// Agora que o Parse SDK foi carregado, você pode usá-lo aqui.
  const APP_ID = '80x2YuBsDmDhpRl9eGnxtubELifvJkwuAiwptyce'
  const JAVASCRIPT_ID = '7hgW4WU5XzSbVmOqhBz7lOoOr9QlFqEl7mowXNyq'
  const REST_API = '0XcGkHxIYVnYJDZIJ0QDr06OA54OGdc5vPeSIuys'
  
  const app = Express()
    PORT = 3333
    app.listen(PORT)
  Parse.initialize(APP_ID, JAVASCRIPT_ID);
  Parse.serverURL = 'https://parseapi.back4app.com';

  const classeProdutos = Parse.Object.extend('Produtos');
  const cProdutosQuery = new Parse.Query(classeProdutos);

  // Agora você pode usar o Parse SDK para consultar dados e preencher a tabela.
  cProdutosQuery.find().then((Obj) => {
      const data = Obj.map(result => result.toJSON());
      fillTable(data);
  });

  function fillTable(data) {
      const tableBody = document.querySelector("#cabecalhoOP tbody");

      data.forEach(item => {
          const row = tableBody.insertRow();
          row.insertCell(0).textContent = item.idProdutos;
          row.insertCell(1).textContent = item.Descricao;
          row.insertCell(2).textContent = item.CodERP;
          row.insertCell(3).textContent = item.PH;
          row.insertCell(4).textContent = item.Ciclo;
          row.insertCell(5).textContent = item.Status ? "Ativo" : "Inativo";
      }
  )}