require('dotenv').config();

const express = require('express');

const app = express();

// const operacoes = require('./lib/operacoes');
const { somar, subtrair, multiplicar, 
    dividir } = require('./lib/operacoes');

app.use(express.json());

app.get('/', (req, res) => {
    // res.send("Olá, mundo!!!");
    res.json({ message: "Olá, mundo!" });
});

app.get('/welcome', (req, res) => {
    const name = req.query.nome || 'visitante';
    // res.send(`Olá, ${name}`);
    res.json({ message: `Olá, ${name}`});
});

app.get('/dobro/:numero', (req, res) => {
    const numero = req.params.numero;

    const dobro = numero * 2;

    // res.send(`O dobro de ${numero} é ${dobro}.`);
    res.json({ numero, dobro});
});

app.post('/operacoes/somar', (req, res) => {
    const { numero1, numero2 } = req.body;

    // const numero1 = req.body.numero1;
    // const numero2 = req.body.numero2;

    const resultado = somar(numero1, numero2);

    res.json({ result: resultado });
});

app.post('/operacoes/subtrair', (req, res) => {
    const { numero1, numero2 } = req.body;

    const resultado = subtrair(numero1, numero2);

    res.json({ result: resultado });
});

app.post('/operacoes/multiplicar', (req, res) => {
    const { numero1, numero2 } = req.body;

    const resultado = multiplicar(numero1, numero2);

    res.json({ result: resultado });
});

app.post('/operacoes/dividir', (req, res) => {
    const { numero1, numero2 } = req.body;

    const resultado = dividir(numero1, numero2);

    res.json({ result: resultado });
});

const PORTA = process.env.PORT || 3000;

app.listen(PORTA, () => {
    console.log(`Servidor rodando na porta ${PORTA}`);
});