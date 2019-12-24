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
	console.log(req.method)
	const message = `Phonebook has info for ${persons.length} people <br><br> ${new Date()}`;
	return res.send(message);
});


app.get('/api/persons', async (req, res) => {
	let persons;
	try {
		persons = await Person.find({});
	} catch (err){
		console.log(err);
		return res.status(400).send({error: 'error with getting persons'});
	}
	return res.send(persons);
});


app.get('/api/persons/:id', (req, res) => {
	const { id } = req.params;
	
	const personToGet = Person.findById(id);
	return personToGet ? res.status(200).send(personToGet) : res.sendStatus(404);
});


app.post('/api/persons', async (req, res) => {
	console.log('api/persons post')
	const { name, number } = req.body;
	if (!name || !number){
		return res.status(400).json({error: 'name or number missing'});
	}
	console.log('next')
	let person = new Person({ name, number });
	try {
		person = await person.save();
		console.log(person)
	} catch (error){
		console.log(error)
		return res.status(400).send({error: 'Failed to save new person'});
	}
	return res.status(201).send(person);
});


app.delete('/api/persons/:id', async (req, res) => {
	console.log('deleting')
	const { id } = req.params;
	await Person.findByIdAndRemove(id);

	return res.sendStatus(204);
});


const PORT = process.env.PORT;
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});