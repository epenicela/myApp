const { request, response } = require('express');
const express = require('express');


// criando a rota (hello) com midleware (Request e response)....
const app = express();

// criando a rota (hello) com midleware (Request e response)
app.get('/hello',(request,response)=>{
    //retornando um json escrito Hello word
    return response.json('Hello Word')
}) 

app.listen(3000, ()=> {
    //Mensagem que indica que o servidor esta ligado
    console.log('servidor on')
})
