const express = require('express');
const port = 3000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

function anzeigenDaten() {
    aktualisiereModellDropdown(); // Aktualisiere das Modell-Dropdown basierend auf der ausgewählten Marke

    var markenAuswahlElement = document.getElementById('markeAuswahl');
    var ausgewaehlteMarke = markenAuswahlElement.value;

    var modellAuswahlElement = document.getElementById('modellAuswahl');
    var ausgewaehltesModell = modellAuswahlElement.value;

    var baujahrAuswahlElement = document.getElementById('baujahrAuswahl');
    var ausgewaehltesBaujahr = baujahrAuswahlElement.value;

    var ergebnisContainer = document.getElementById('ergebnisse');
    ergebnisContainer.innerHTML = '';

    var gefunden;

    // Füge die Marke als Filterkriterium hinzu
    if (ausgewaehlteMarke !== '' && ausgewaehltesModell !== '' && ausgewaehltesBaujahr !== '') {
        gefunden = automodelle.filter(function (auto) {
            return auto.marke === ausgewaehlteMarke && auto.modell === ausgewaehltesModell && auto.baujahr.toString() === ausgewaehltesBaujahr;
        });
    } else if (ausgewaehlteMarke !== '' && ausgewaehltesModell !== '') {
        gefunden = automodelle.filter(function (auto) {
            return auto.marke === ausgewaehlteMarke && auto.modell === ausgewaehltesModell;
        });
    } else if (ausgewaehlteMarke !== '' && ausgewaehltesBaujahr !== '') {
        gefunden = automodelle.filter(function (auto) {
            return auto.marke === ausgewaehlteMarke && auto.baujahr.toString() === ausgewaehltesBaujahr;
        });
    } else if (ausgewaehlteMarke !== '') {
        gefunden = automodelle.filter(function (auto) {
            return auto.marke === ausgewaehlteMarke;
        });
    }


    if (gefunden.length > 0) {
        gefunden.forEach(function (auto) {
            var autoInfo = document.createElement('div');
            autoInfo.innerHTML = '<strong>ID:</strong> ' + auto.id + '<br>' +
                '<strong>Modell:</strong> ' + auto.modell + '<br>' +
                '<strong>Baujahr:</strong> ' + auto.baujahr + '<br><br>';
            ergebnisContainer.appendChild(autoInfo);
        });
    } else {
        ergebnisContainer.innerHTML = 'Keine Ergebnisse gefunden.';
    }
}

app.get('/api/automodelle', (req, res) => {
    res.json(automodelle);
});

// Endpoint zum Hinzufügen eines neuen Automodells
app.post('/api/automodelle', (req, res) => {
    const { marke, modell, baujahr, motor, leistung } = req.body;
    const id = automodelle.length + 1; // Generiere eine neue ID für das Auto
    const neuAuto = { id, marke, modell, baujahr, motor, leistung };
    automodelle.push(neuAuto);
    res.status(201).json(neuAuto);
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
