const express = require('express');
const app = express();

const connect = require('./modules/connect');


app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// connect to database
void (async () => {
    try {
        await connect();
        console.log('connect to database');
    } catch (error) {
        console.log('error connecting to database:' , error.message);
    }
}) ();

app.get('/', (req, res) => {
    res.status(200).json({ message: 'peace'});
});

module.exports = app;