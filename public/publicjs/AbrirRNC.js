import {BDUsuarios} from '../BD/Bd.js'

function carregarInspetor(){
    let options = document.getElementById("idSelectInspetor")
    
    BDUsuarios.forEach(elements =>{
        let op = document.createElement("option")
        op.value = elements.Matricula
        op.text = elements.Nome
        options.appendChild(op)
    })
}
document.addEventListener("DOMContentLoaded", function() {
    carregarInspetor();
});

