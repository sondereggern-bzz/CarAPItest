const express = require('express');
const port = 3000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


let cars = [
    { id: 1, brand: 'Audi', model: 'A4', year: 2019, price: 50000 },
    { id: 2, brand: 'BMW', model: 'X5', year: 2020, price: 70000 },
    { id: 3, brand: 'Mercedes', model: 'C-Class', year: 2018, price: 45000 },
    { id: 4, brand: 'Volkswagen', model: 'Golf', year: 2017, price: 25000 },
    { id: 5, brand: 'Toyota', model: 'Corolla', year: 2016, price: 20000 },
    { id: 6, brand: 'Ford', model: 'Focus', year: 2015, price: 15000 },
    { id: 7, brand: 'Nissan', model: 'Qashqai', year: 2014, price: 10000 },
    { id: 8, brand: 'Hyundai', model: 'i30', year: 2013, price: 8000 },
    { id: 9, brand: 'Kia', model: 'Ceed', year: 2012, price: 6000 },
    { id: 10, brand: 'Opel', model: 'Astra', year: 2011, price: 4000 },
    { id: 11, brand: 'Audi', model: 'A3', year: 2010, price: 3000 }
]

// GET Endpoint für alle Autos

app.get('/cars', (req, res) => {
    res.json(cars);
});

// GET Auto anhand seiner ID
app.get('/cars/:id', (req, res) =>{
    const id = req.params.id;
    res.send(cars.find((car) => car.id === parseInt(id)));
});



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
