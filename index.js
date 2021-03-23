const express = require('express');
const path = require('path');
const config = require('config');


const port = process.env.PORT || config.get('server.port');

const pedido = {
    mensagem: 'Teste de pedido'
}

const registro = {
    mensagem: 'Teste de registro'
}

const app = express();



app.set('port', port);

app.route('/pedido').get((req, res) => {
    res.status(200).json(pedido)
});

app.route('/registro').get((req, res) => {
    res.status(200).json(registro);
});

app.listen(port, () => {
    console.log("Porta: " + port)
})