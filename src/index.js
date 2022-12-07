const app = require('./server');

const PORT =3001;

app.listen(PORT, () => {
    console.log('Rest API listening on port $ {PORT}');
});