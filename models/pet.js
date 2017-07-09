const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const petSchema = new Schema({
	name: String,
	photo: String,
	description: {
		type: String,
		default: ""
	},
	score: {
		type: Number,
		default: 0
	}

});

//exports this, with Pet as the collection, and petSchema as the data structure type.
module.exports = mongoose.model('Pet', petSchema);