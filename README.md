# mongo-crud
selasa pagi, gunakan npm 'mongodb'

## Routes
#### list of books routes :

|Routes                                         |HTTP        |Description                |
|-----------------------------------------------|:----------:|--------------------------:|
|<div style="color:cyan">/books</div>           |** GET **   |Show All books             |
|<div style="color:cyan">/books/:id</div>       |** GET **   |Show 1 book based on ID    |
|<div style="color:cyan">/books/insert</div>    |** POST **  |Insert data into Collection|
|<div style="color:cyan">/books/update/:id</div>|** PUT **   |Update data based on ID    |
|<div style="color:cyan">/books/delete/:id</div>|** DELETE **|Delete data based on ID    |

### NB : My mongoDB is autenthicated by admin on admin collection, auth object is in helper
