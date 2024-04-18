const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const port = 3000;

const app = express();

const database = require('./database');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/automodelle', (req, res) => {
    res.json(database.automodelle);
});

app.use(express.json());
app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

app.post('/api/automodelle', checkAuth, (req, res) => {
    const { marke, modell, baujahr, motor, leistung } = req.body;
    const id = database.automodelle.length + 1;
    const neuAuto = { id, marke, modell, baujahr, motor, leistung };
    database.automodelle.push(neuAuto);
    res.status(201).json(neuAuto);
});

app.put('/api/automodelle/:id', checkAuth, (req, res) => {
    const id = parseInt(req.params.id);
    const { marke, modell, baujahr, motor, leistung } = req.body;
    const index = database.automodelle.findIndex(auto => auto.id === id);
    if (index !== -1) {
        database.automodelle[index] = { id, marke, modell, baujahr, motor, leistung };
        res.json(database.automodelle[index]);
    } else {
        res.status(404).send('Auto nicht gefunden');
    }
});

app.delete('/api/automodelle/:id', checkAuth, (req, res) => {
    const id = parseInt(req.params.id);
    const index = database.automodelle.findIndex(auto => auto.id === id);
    if (index !== -1) {
        database.automodelle.splice(index, 1);
        res.status(204).send();
    } else {
        res.status(404).send('Auto nicht gefunden');
    }
});

// Login

app.post('/login', (req, res) => {
    const {username, password} = req.body;
    if (username === 'user' && password === '1234') {
        req.session.authenticated = true;
        req.session.username = username;
        res.status(201).send('Login erfolgreich');
    } else {
        res.status(401).send('Unauthorized')
    }
});

app.get('/verify', (req, res) => {
    if (req.session.authenticated) {
        res.status(200).send('Sie sind eingeloggt.');
    } else {
        res.status(401).send('Unauthorized');
    }
});

app.delete('/logout', (req, res) => {
    req.session.destroy();
    res.status(204).send()
})

function checkAuth(req, res, next) {
    if (req.session.authenticated) {
        next();
    } else {
        res.status(401).send('Unauthorized');
    }
}

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

