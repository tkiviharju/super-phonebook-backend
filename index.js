const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { persons } = require('./persons.json');

app.use(bodyParser.json());

app.get('/', (req, res) => res.redirect('/info'));

app.get('/info', (req, res) => {
	const message = `Phonebook has info for ${persons.length} people <br><br> ${new Date()}`;
	return res.send(message);
});

app.get('/api/persons', (req, res) => {
	return res.send(persons);
});

const PORT = 3001
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
})