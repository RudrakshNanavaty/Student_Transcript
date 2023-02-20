const mongoose = require('mongoose');
const { schemaOptions } = require('./modelOptions');

const studentSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true
		},
		branch: {
			type: String,
			required: true
		},
		gradYear: {
			type: Number,
			min: 1945,
			max: new Date().getFullYear() + 4,
			default: new Date().getFullYear()
		},
		roll_no: {
			type: String,
			matches: / ^[0-9]{2}[A-Z]{3}[0-9]{3}$ /,
			required: true,
			unique: true
		},
		scores: {
			sem1: {
				type: Number,
				required: true,
				min: 0,
				max: 10,
				default: 0
			},
			sem2: {
				type: Number,
				required: true,
				min: 0,
				max: 10,
				default: 0
			},
			sem3: {
				type: Number,
				required: true,
				min: 0,
				max: 10,
				default: 0
			},
			sem4: {
				type: Number,
				required: true,
				min: 0,
				max: 10,
				default: 0
			},
			sem5: {
				type: Number,
				required: true,
				min: 0,
				max: 10,
				default: 0
			},
			sem6: {
				type: Number,
				required: true,
				min: 0,
				max: 10,
				default: 0
			},
			sem7: {
				type: Number,
				required: true,
				min: 0,
				max: 10,
				default: 0
			},
			sem8: {
				type: Number,
				required: true,
				min: 0,
				max: 10,
				default: 0
			}
		}
	},
	schemaOptions
);

module.exports = mongoose.model('Student', studentSchema);
