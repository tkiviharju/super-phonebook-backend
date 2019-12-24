const mongoose = require('mongoose');

const Person = require('./models/person.js');

const name = process.argv[2];
const number = process.argv[3];

if (!name || !number){
	console.log('phonebook:');
	Person.find({}).then(result => {
		result.forEach(person => console.log(person.name, person.number));
		mongoose.connection.close();
		process.exit(1);
	});
}

const person = new Person({ name, number })

person.save().then(() => {
console.log(`added ${name} with number ${number} to phonebook`);
mongoose.connection.close();
})