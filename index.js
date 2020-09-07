const express = require('express')
const app = express()

const expressHbs = require('express-hbs')
const portfinder = require('portfinder')
const bodyParser = require('body-parser')

const books = require('./routes/books')

app.use(bodyParser.urlencoded({ extended: true }))

app.engine('hbs', expressHbs.express4({
  layoutsDir: __dirname + '/views/layouts',
  defaultLayout: __dirname + '/views/layouts/default'

}))
app.set('view engine', 'hbs')
app.set('views', __dirname + '/views')

app.get('/', (req, res) => res.render('home'))

app.get('/books', books.list_get)
app.get('/books/new', books.create_get)
app.post('/books/new', books.create_post)
app.get('/books/:isbn', books.show_get)
app.post('/books/:isbn', books.update_post)

const run = async () => {
  const port = await portfinder.getPortPromise({ port: 4000 })
  app.listen(port, () => console.log('Server started at port' + port))
}

run()
