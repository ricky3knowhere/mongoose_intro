const mongoose = require('mongoose');
const Schema = mongoose.Schema
const bookSchema = new Schema({
  title: String,
  isbn: String,
  quantity: Number
})

const BookModel = mongoose.model('Book', bookSchema)

// const db = () => {

// }

const create_post = (req, res) => {
  mongoose.connect('mongodb://127.0.0.1:27017/book_store', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
  });

  const db = mongoose.connection;

  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    const book = new BookModel(req.body)
    book.save((err, inserted) => {
      if(err) console.log(err)
      res.send(inserted)
    })
  });
}



const list_get = (req, res) => res.render('home')
const create_get = (req, res) => res.render('form_create')
const show_get = (req, res) => res.render('home')
const update_post = (req, res) => res.render('home')

const books = {
  list_get,
  create_get,
  create_post,
  show_get,
  update_post
}

module.exports = books