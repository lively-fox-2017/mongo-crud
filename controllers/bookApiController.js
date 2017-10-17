'use strict'

const Book = require('./../models/book');

class BookApiController {
	static create(req, res) {
		let created;
		Book.generateBook(req.body)
		.then(newBook => {
			created = newBook;
			return Book.create(newBook);
		})
		.then(result => {
			res.status(201).send({
				status: result,
				created: created
			});
		})
		.catch(err => {
			console.log(err)
			res.status(500).send(err);
		});
	}

	static findAll(req, res) {
		Book.findAll()
		.then(books => {
			res.status(200).send(books);
		})
		.catch(err => {
			res.status(500).send(err);
		});
	}

	static findOne(req, res) {
		Book.findOne(req.params.id)
		.then(book => {
			res.status(200).send(book);
		})
		.catch(err => {
			res.status(500).send(err);
		});
	}

	static update(req, res) {
		let updated;
		Book.generateBook(req.body)
		.then(newBook => {
			updated = newBook;
			Book.update(req.params.id, newBook);
		})
		.then(result => {
			res.status(200).send({
				status: result,
				updated: updated
			});
		})
		.catch(err => {
			res.status(500).send(err)
		});
	}

	static delete(req, res) {
		Book.delete(req.params.id)
		.then(result => {
			res.status(200).send({
				status: result,
				deletedId: req.params.id
			});
		})
		.catch(err => {
			res.status(500).send(err);
		});
	}
}

module.exports = BookApiController;