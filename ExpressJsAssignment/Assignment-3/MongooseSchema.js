const mongoose = require('mongoose');
 
// make a connection 
mongoose.connect('mongodb://localhost:27017/Bookstores');
 
// get reference to database
const db = mongoose.connection;
 
db.on('error', console.error.bind(console, 'connection error:'));
 
db.once('open', ()=> {
    console.log("Connection Successful!");
     
    // define Schema
    const BookSchema = mongoose.Schema({
      name: String,
      price: Number,
      quantity: Number
    });
 
    // compile schema to model
    const Book = mongoose.model('Book', BookSchema, 'bookstore');
 
    // a document instance
    const book1 = new Book({ name: 'First Cursh', price: 1000, quantity: 1 });
 
    // save model to database
    book1.save((err, book)=> {
      if (err) return console.error(err);
      console.log(book.name + " saved to bookstore collection.");
    });
     
});