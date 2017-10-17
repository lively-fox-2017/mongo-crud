'use strict'

const MongoClient = require('mongodb').MongoClient;
const URL = 'mongodb://localhost:27017/library';
const ObjectID = require('mongodb').ObjectId;

class Book {
	static generateBook(bookObj) {
		return new Promise((resolve, reject) => {
			const validationError = (msg) => {
				let error = new Error();
				error.status = 409;
				error.message = msg;
				return error;
			}
			
			if (!bookObj.isbn) reject(validationError('ISBN can not be empty'));
			else if (!bookObj.title) reject(validationError('Title can not be empty'));
			else if (!bookObj.author) reject(validationError('Author can not be empty'));
			else if (!bookObj.category) reject(validationError('Category can not be empty'));
			else if (!bookObj.stock) reject(validationError('Stock can not be empty'));
			else resolve({
				isbn: String(bookObj.isbn),
				title: String(bookObj.title),
				author: String(bookObj.author),
				category: String(bookObj.category),
				stock: Number(bookObj.stock)
			});
		});
	}

	static fetchCollection() {
		return MongoClient.connect(URL)
		.then(library => library.collection('book'))
		.catch(err => Promise.reject(err));
	}

	static create(book) {
		return this.fetchCollection()
		.then(bookCollection => bookCollection.insertOne(book))
		.catch(err => Promise.reject(err));
	}

	static findAll() {
		return this.fetchCollection()
		.then(bookCollection => bookCollection.find({}).toArray())
		.catch(err => Promise.reject(err));
	}
	
	static findOne(id) {
		return this.fetchCollection()
		.then(bookCollection => bookCollection.findOne({_id: new ObjectID(id)}))
		.catch(err => Promise.reject(err));
	}

	static update(id, newBook) {
		return this.fetchCollection()
		.then(bookCollection => bookCollection.updateOne({_id: new ObjectID(id)}, newBook))
		.catch(err => Promise.reject(err));
	}

	static delete(id) {
		return this.fetchCollection()
		.then(bookCollection => bookCollection.deleteOne({_id: new ObjectID(id)}))
		.catch(err => Promise.reject(err));
	}
}

module.exports = Book;