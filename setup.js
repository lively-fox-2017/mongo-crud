const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient

var url = 'mongodb://localhost:27017/library';


MongoClient.connect(url, (err, db)=>{
  let bookCollection = db.collection('books');
  bookCollection.insertMany(
    [
      {
        "isbn" : "978-1-60309-057-5",
        "title" : "Dragon Puncher",
        "author" : "James Kochalka",
        "category" : "All Ages",
        "stock" : 3
      },{
        "isbn" : "978-1-891830-77-8",
        "title" : "Every Girl is the End of the World for Me",
        "author" : "Jeffrey Brown",
        "category" : "Mature (+16)",
        "stock" : 5
      }
    ],
    (err, result)=>{
      if(!err) return console.log('berhasil');

    }
  )
})
