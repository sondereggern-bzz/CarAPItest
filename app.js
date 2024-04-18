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

app.put('/api/automodelle/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { marke, modell, baujahr, motor, leistung } = req.body;
    const index = datenbank.automodelle.findIndex(auto => auto.id === id);
    if (index !== -1) {
        datenbank.automodelle[index] = { id, marke, modell, baujahr, motor, leistung };
        res.json(datenbank.automodelle[index]);
    } else {
        res.status(404).send('Auto nicht gefunden');
    }
});

app.delete('/api/automodelle/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = datenbank.automodelle.findIndex(auto => auto.id === id);
    if (index !== -1) {
        datenbank.automodelle.splice(index, 1);
        res.status(204).send();
    } else {
        res.status(404).send('Auto nicht gefunden');
    }
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

