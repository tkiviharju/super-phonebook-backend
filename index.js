require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
const Person = require('./models/person.js');



morgan.token('body', (req) => req.method === 'POST' ? JSON.stringify(req.body) : '');
app.use(morgan(':method :url :status :response-time ms :body'));
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('build'))


app.get('/info', (req, res) => {
	const message = `Phonebook has info for ${persons.length} people <br><br> ${new Date()}`;
	return res.send(message);
});


app.get('/api/persons', async (req, res) => {
	let persons;
	try {
		persons = await Person.find({});
	} catch (err){
		return next(error);
	}
	return res.send(persons);
});


app.get('/api/persons/:id', async (req, res, next) => {
	const { id } = req.params;
	try {
		const person = await Person.findById(id);
		if (!person) return res.sendStatus(404);
		
		return res.status(200).send(person);
	} catch (error) {
		return next(error);
	}
});


app.post('/api/persons', async (req, res) => {
	const { name, number } = req.body;
	if (!name || !number){
		return res.status(400).json({error: 'name or number missing'});
	}
	let person = new Person({ name, number });
	try {
		person = await person.save();
	} catch (error){
		return next(error);
	}
	return res.status(201).send(person);
});


app.delete('/api/persons/:id', async (req, res) => {
	const { id } = req.params;
	try {
		await Person.findByIdAndRemove(id);
	} catch (err) {
		return next(err);
	}

	return res.sendStatus(204);
});

const unknownEndpoint = (req, res) => {
	res.status(404).send({ error: 'unknown endpoint' })
}
app.use(unknownEndpoint);

const errorHandler = (error, req, res, next) => {
	console.error(error.message);
	if (error.name === 'CastError' && error.kind == 'ObjectId') {
	  return res.status(400).send({ error: 'malformatted id' });
	}
	return res.status(400).send({ error: 'error with request'});
}

app.use(errorHandler);


const PORT = process.env.PORT;
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});