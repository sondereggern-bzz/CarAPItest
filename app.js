// app.js

const express = require('express');
const bodyParser = require('body-parser');
const datenbank = require('./database');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/automodelle', (req, res) => {
    res.json(datenbank.automodelle);
});

app.post('/api/automodelle', (req, res) => {
    const { marke, modell, baujahr, motor, leistung } = req.body;
    const id = datenbank.automodelle.length + 1;
    const neuAuto = { id, marke, modell, baujahr, motor, leistung };
    datenbank.automodelle.push(neuAuto);
    res.status(201).json(neuAuto);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
