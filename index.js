const express = require('express');
const path = require('path');
const config = require('config');


const port = process.env.PORT || config.get('server.port');

const app = express();

app.set('port', port);

app.route('/pedido'.get((req, res) => {
    res.status(200).env("Teste de pedidos OK")
}));

app.route('/registro'.get((req, res) => {
    res.status(200).env("Teste de Registro OK")
}));

app.listen(port, () => {
    console.log("Porta: " + port)
})