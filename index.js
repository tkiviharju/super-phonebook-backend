const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const persons = require('./persons.json');

app.use(bodyParser.json());

app.get('/', (req, res) => res.redirect('/api/persons'));

app.get('/api/persons', (req, res) => {
	res.send(persons);
});

const PORT = 3001
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
})