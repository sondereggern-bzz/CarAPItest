// datenbank.js

var automodelle = [
    { id: 1, marke: "Audi", modell: "A7", baujahr: 2020, motor: "3L V6 TFSI", leistung: 340},
    { id: 2, marke: "Audi", modell: "RS6", baujahr: 2021, motor: "4L V8", leistung: 600 },
    { id: 3, marke: "Porsche", modell: "911", baujahr: 2021, motor: "3L F6", leistung: 450 },
    { id: 4, marke: "Audi", modell: "s5", baujahr: 2022, motor: "3L V6 TFSI", leistung: 350 },
    { id: 5, marke: "Volvo", modell: "S60", baujahr: 2021, motor: "2L i4 ", leistung: 250 },
    { id: 6, marke: "Maserati", modell: "Ghibli", baujahr: 2023, motor: "3.7L V8", leistung: 580 },
    { id: 7, marke: "BMW", modell: "M5", baujahr: 2021, motor: "4.4L V8", leistung: 625 },
    { id: 8, marke: "BMW", modell: "M3", baujahr: 2021, motor: "3L i6", leistung: 510 },
    { id: 9, marke: "BMW", modell: "M4", baujahr: 2021, motor: "3L i6", leistung: 510 },
    { id: 10, marke: "Ferrari", modell: "F8", baujahr: 2021, motor: "3.9L V8", leistung: 720 },
    { id: 11, marke: "Ferrari", modell: "F8 Spider", baujahr: 2021, motor: "3.9L V8", leistung: 720 },
    { id: 12, marke: "Ferrari", modell: "F8 Tributo", baujahr: 2021, motor: "3.9L V8", leistung: 720 },
    { id: 13, marke: "bugatti", modell: "Chiron", baujahr: 2021, motor: "8L W16", leistung: 1500 },
    { id: 14, marke: "oldsmobile", modell: "442", baujahr: 1970, motor: "7.5L V8", leistung: 365 },
    { id: 15, marke: "dodge", modell: "charger", baujahr: 1970, motor: "7.2L V8", leistung: 375 },
    { id: 16, marke: "dodge", modell: "challenger", baujahr: 1970, motor: "7.2L V8", leistung: 375 },
    { id: 17, marke: "ford", modell: "mustang", baujahr: 1970, motor: "7L V8", leistung: 375 },
    { id: 18, marke: "ford", modell: "mustang", baujahr: 1969, motor: "7L V8", leistung: 375 },
    { id: 19, marke: "monteverdi", modell: "high speed 375", baujahr: 1969, motor: "7L V8", leistung: 375 },
    { id: 20, marke: "chevrolet", modell: "camaro", baujahr: 1969, motor: "7L V8", leistung: 375 },
    { id: 21, marke: "chevrolet", modell: "camaro", baujahr: 1968, motor: "7L V8", leistung: 375 },
    { id: 22, marke: "Mercedes-Benz", modell: "300sl", baujahr: 1954, motor: "3L i6", leistung: 215 },
    { id: 23, marke: "Bentley", modell: "Continental GT", baujahr: 2021, motor: "6L W12", leistung: 635 },
    { id: 24, marke: "Bentley", modell: "silver shadow", baujahr: 1965, motor: "6.2L V8", leistung: 220 },
    { id: 25, marke: "Bentley", modell: "Continental GT", baujahr: 2003, motor: "6L W12", leistung: 560 },
    { id: 26, marke: "monteverdi", modell: "hai 450", baujahr: 1970, motor: "7L V8", leistung: 375 },
    { id: 27, marke: "cadillac", modell: "eldorado", baujahr: 1970, motor: "8.2L V8", leistung: 400 },
    { id: 28, marke: "cadillac", modell: "eldorado", baujahr: 1969, motor: "8.2L V8", leistung: 400 },
    { id: 29, marke: "lincoln", modell: "continental", baujahr: 1969, motor: "7.5L V8", leistung: 365 },
    { id: 30, marke: "Lamborghini", modell: "aventador", baujahr: 2021, motor: "6.5L V12", leistung: 770 },
    { id: 31, marke: "Lamborghini", modell: "aventador", baujahr: 2011, motor: "6.5L V12", leistung: 700 },
    { id: 32, marke: "renault", modell: "5", baujahr: 1972, motor: "1.3L i4", leistung: 44 },
    { id: 33, marke: "renault", modell: "5", baujahr: 1976, motor: "1.3L i4", leistung: 44 },
    { id: 34, marke: "renault", modell: "5", baujahr: 1980, motor: "1.3L i4", leistung: 44 },
    { id: 35, marke: "renault", modell: "5", baujahr: 1984, motor: "1.3L i4", leistung: 44 },
    { id : 36, marke: "jeep", modell: "wrangler", baujahr: 2021, motor: "3.6L V6", leistung: 285 },


];
function fillDropdown() {
    var dropdown = document.getElementById('modellAuswahl');

    automodelle.forEach(function (auto) {
        var option = document.createElement('option');
        option.value = auto.modell;
        option.text = auto.modell;
        dropdown.add(option);
    });
}

function fillDropdownYear() {
    var dropdown = document.getElementById('baujahrAuswahl');


    var baujahre = [''].concat([...new Set(automodelle.map(auto => auto.baujahr))]);

    baujahre.forEach(function (jahr) {
        var option = document.createElement('option');
        option.value = jahr === '' ? '' : jahr.toString(); // Sicherstellen, dass der leere String als Wert verwendet wird
        option.text = jahr === '' ? 'Kein Jahr' : jahr;
        dropdown.add(option);
    });
}

function aktualisiereModellDropdown() {
    var markenDropdown = document.getElementById('markeAuswahl');
    var ausgewaehlteMarke = markenDropdown.value;

    var modellDropdown = document.getElementById('modellAuswahl');
    modellDropdown.innerHTML = ''; // Lösche vorhandene Optionen

    // Holen aller einzigartigen Modelle für die ausgewählte Marke
    var modelle = [...new Set(automodelle.filter(auto => auto.marke === ausgewaehlteMarke).map(auto => auto.modell))];

    modelle.forEach(function (modell) {
        var option = document.createElement('option');
        option.value = modell;
        option.text = modell;
        modellDropdown.add(option);
    });
}


function fillMarkenDropdown() {
    var dropdown = document.getElementById('markeAuswahl');

    // Holen aller einzigartigen Marken
    var marken = [...new Set(automodelle.map(auto => auto.marke))];

    marken.forEach(function (marke) {
        var option = document.createElement('option');
        option.value = marke;
        option.text = marke;
        dropdown.add(option);
    });
}



window.onload = function () {
    fillMarkenDropdown();
    fillDropdown();
    fillDropdownYear();
};