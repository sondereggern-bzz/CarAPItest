// datenbank.js


const automodelle = [
        {
            id: 1,
            marke: 'Audi',
            modell: 'A7',
            baujahr: 2020,
            motor: '3L V6 TFSI',
            leistung: 340
        },
        {
            id: 2,
            marke: 'Audi',
            modell: 'A8',
            baujahr: 2021,
            motor: '4L V8 TFSI',
            leistung: 460
        },
        {
            id: 3,
            marke: 'Audi',
            modell: 'RS6',
            baujahr: 2021,
            motor: '4L V8',
            leistung: 600
        },
        {
            id: 4,
            marke: 'Audi',
            modell: 'S5',
            baujahr: 2022,
            motor: '3L V6 TFSI',
            leistung: 350
        },
        {
            id: 5,
            marke: 'Bentley',
            modell: 'Continental GT',
            baujahr: 2021,
            motor: '6L W12',
            leistung: 635
        },
        {
            id: 6,
            marke: 'Bentley',
            modell: 'Silver Shadow',
            baujahr: 1965,
            motor: '6.2L V8',
            leistung: 220
        },
        {
            id: 7,
            marke: 'Bentley',
            modell: 'Continental GT',
            baujahr: 2003,
            motor: '6L W12',
            leistung: 560
        },
        {
            id: 8,
            marke: 'BMW',
            modell: 'M5',
            baujahr: 2021,
            motor: '4.4L V8',
            leistung: 625
        },
        {
            id: 9,
            marke: 'BMW',
            modell: 'M3',
            baujahr: 2021,
            motor: '3L i6',
            leistung: 510
        },
        {
            id: 10,
            marke: 'BMW',
            modell: 'M4',
            baujahr: 2021,
            motor: '3L i6',
            leistung: 510
        },
        {
            id: 11,
            marke: 'Bugatti',
            modell: 'Chiron',
            baujahr: 2021,
            motor: '8L W16',
            leistung: 1500
        },
        {
            id: 12,
            marke: 'Cadillac',
            modell: 'Eldorado',
            baujahr: 1970,
            motor: '8.2L V8',
            leistung: 180
        },
        {
            id: 13,
            marke: 'Cadillac',
            modell: 'Eldorado',
            baujahr: 1969,
            motor: '8.2L V8',
            leistung: 180
        },
        {
            id: 14,
            marke: 'Chevrolet',
            modell: 'Camaro',
            baujahr: 1969,
            motor: '7L V8',
            leistung: 375
        },
        {
            id: 15,
            marke: 'Chevrolet',
            modell: 'Camaro',
            baujahr: 1968,
            motor: '7L V8',
            leistung: 375
        },
        {
            id: 16,
            marke: 'Dodge',
            modell: 'Challenger',
            baujahr: 1970,
            motor: '7.2L V8',
            leistung: 375
        },
        {
            id: 17,
            marke: 'Dodge',
            modell: 'Charger',
            baujahr: 1970,
            motor: '7.2L V8',
            leistung: 375
        },
        {
            id: 18,
            marke: 'Ferrari',
            modell: 'F8',
            baujahr: 2021,
            motor: '3.9L V8',
            leistung: 720
        },
        {
            id: 19,
            marke: 'Ferrari',
            modell: 'F8 Spider',
            baujahr: 2021,
            motor: '3.9L V8',
            leistung: 720
        },
        {
            id: 20,
            marke: 'Ferrari',
            modell: 'F8 Tributo',
            baujahr: 2021,
            motor: '3.9L V8',
            leistung: 720
        },
        {
            id: 21,
            marke: 'Ford',
            modell: 'Mustang',
            baujahr: 1970,
            motor: '7L V8',
            leistung: 375
        },
        {
            id: 22,
            marke: 'Ford',
            modell: 'Mustang',
            baujahr: 1969,
            motor: '7L V8',
            leistung: 375
        },
        {
            id: 23,
            marke: 'LiMcoln',
            modell: 'Continental',
            baujahr: 1969,
            motor: '7.5L V8',
            leistung: 365
        },
        {
            id: 24,
            marke: 'Maserati',
            modell: 'Ghibli',
            baujahr: 2023,
            motor: '3.7L V8',
            leistung: 580
        },
        {
            id: 25,
            marke: 'Mercedes-Benz',
            modell: '300sl',
            baujahr: 1954,
            motor: '3L i6',
            leistung: 215
        },
        {
            id: 26,
            marke: 'Monteverdi',
            modell: 'High speed 375',
            baujahr: 1969,
            motor: '7L V8',
            leistung: 375
        },
        {
            id: 27,
            marke: 'Monteverdi',
            modell: 'Hai 450',
            baujahr: 1970,
            motor: '7L V8',
            leistung: 375
        },
        {
            id: 28,
            marke: 'Oldsmobile',
            modell: '442',
            baujahr: 1970,
            motor: '7.5L V8',
            leistung: 365
        },
        {
            id: 29,
            marke: 'Porsche',
            modell: '911',
            baujahr: 2021,
            motor: '3L F6',
            leistung: 450
        },
        {
            id: 30,
            marke: 'Volvo',
            modell: 'S60',
            baujahr: 2021,
            motor: '2L i4 ',
            leistung: 250
        },
        {
            id: 31,
            marke: 'VW',
            modell: 'Golf 2.0 TSI R DSG',
            baujahr: 2021,
            motor: '2L i4',
            leistung: 320
        }
    ];

module.exports = {
    automodelle
};
