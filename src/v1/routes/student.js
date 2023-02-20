const express = require('express');
const router = express.Router();
const Student = require('../models/student');

// search for a student
router.get('/', async (req, res) => {
	try {
		const student = await Student.find(req.params);
		if (!student)
			return res.status(404).json({
				error: 'Student doest not exist in Database'
			});
		return res.status(200).json(student);
	} catch (error) {
		console.log(error);
		return res.send(error);
	}
});

// add new student
router.post('/', async (req, res) => {
	try {
		const student = await Student.findOne({ roll_no: req.body.roll_no });
		if (student) {
			return res.status(409).json({
				error: 'Student already exists in Database.',
				student_data: student
			});
		}

		student = await Student.create(req.body);

		return res.status(201).json(student);
	} catch (error) {
		console.log(error);
		return res.send(error);
	}
});

// update student data
router.put('/', async (req, res) => {
	try {
		const student = await Student.updateOne(
			{ roll_no: req.body.roll_no },
			{ $set: req.body.updated_data }
		);

		if (!student)
			return res.status(404).json({
				error: 'Student doest not exist in Database'
			});

		return res.status(202).json(student);
	} catch (error) {
		console.log(error);
		res.send(error);
	}
});

// delete a student
router.delete('/', async (req, res) => {
	try {
		const student = await Student.deleteOne({ roll_no: req.body.roll_no });

		if (!student) {
			return res.status(404).json({
				error: 'Student doest not exist in Database'
			});
		}

		return res.status(200).json(student);
	} catch (error) {
		console.log(error);
		res.send(error);
	}
});

module.exports = router;
