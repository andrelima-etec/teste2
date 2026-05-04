require('dotenv').config();

const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("Olá, mundo!!!");
});

app.get('/welcome', (req, res) => {
    const name = req.query.nome || 'visitante';
    res.send(`Olá, ${name}`);
});

const PORTA = process.env.PORT || 3000;

app.listen(PORTA, () => {
    console.log(`Servidor rodando na porta ${PORTA}`);
});