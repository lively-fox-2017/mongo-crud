# mongo-crud
selasa pagi, gunakan npm 'mongodb'
# CRUD functionality using mongo-db
## Available function
| Route           | Method   | Description   |
| ----------      |:------| :-------------|
| /api/books      |GET     |GET all books|
| /api/books/:key/:value  |GET     |GET a book using key value pairs|
| /api/books      |POST    |Create a book    |
| /api/books/:key/:value  |DELETE  |Delete a book using key value pairs    |
| /api/users/:isbn  |PUT     |Update a book with new info|
*provide info isbn, title, author, category, stock in body for PUT and POST method
