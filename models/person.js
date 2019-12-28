require('dotenv').config();
const mongoose = require('mongoose');
const validator = require('mongoose-unique-validator');


const url = process.env.MONGODB_URI;

mongoose
	.connect(url, { useNewUrlParser: true,  useUnifiedTopology: true })
	.then(() => console.log('connected to MongoDB'))
	.catch(error => console.log('error connecting to MongoDB:', error.message));

const personSchema = new mongoose.Schema({
	name: { type: String, required: true, unique: true, minlength: 3 },
	number: { type: String, required: true, unique: true, minlength: 8 }
});

personSchema.plugin(validator);

personSchema.set('toJSON', {
	transform: (document, obj) => {
		obj.id = obj._id.toString();
		delete obj._id;
		delete obj.__v;
	}
});

module.exports = mongoose.model('Person', personSchema);