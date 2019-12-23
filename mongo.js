const mongoose = require('mongoose');

if (process.argv.length<3) {
	console.log('give password as argument');
	process.exit(1);
}
  
const password = process.argv[2];

const url = `mongodb+srv://phonebook:${password}@cluster0-1rzz6.mongodb.net/test?retryWrites=true&w=majority`;

mongoose.connect(url, { useNewUrlParser: true,  useUnifiedTopology: true });

const personSchema = new mongoose.Schema({
	name: String,
	number: String,
})

const Person = mongoose.model('Person', personSchema)

const name = process.argv[3];
const number = process.argv[4];

if (!name || !number){
	console.log('phonebook:');
	Person.find({}).then(result => {
		result.forEach(person => console.log(person.name, person.number));
		mongoose.connection.close();
		process.exit(1);
	})
}

const person = new Person({ name, number })

person.save().then(() => {
console.log(`added ${name} with number ${number} to phonebook`);
mongoose.connection.close();
})