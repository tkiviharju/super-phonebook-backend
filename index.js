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

app.get('/api/persons/:id', (req, res) => {
	const { id } = req.params;
	
	const person = persons.find(person => person.id === parseInt(id));
	return person ? res.status(200).send(person) : res.sendStatus(404);
});

const PORT = 3001
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
})