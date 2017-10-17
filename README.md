# Books CRUD - Release 1
Demo CRUD with mongodb.

## REST API

List of routes:

| Route                   | HTTP   | Description            			 				|
|-------------------------|--------|--------------------------------------|
| `/api` 			  					| GET    | Get all books		 										|
| `/api/:id`		  				| GET    | Get a single book  				 					|
| `/api/`			  					| POST   | Create a book  				 							|
| `/api/:id`		  				| DELETE | Delete a book						 						|
| `/api/:id`		  				| PUT	   | Update a book with new info 		 			|

***
## Usage
with only npm:
```
npm install
node app.js
```

Access the API via `http:localhost:3000/api`