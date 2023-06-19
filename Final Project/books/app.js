const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost/bookCollectionDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    genre: String,
    publishedYear: Number
});

const Book = mongoose.model('Book', bookSchema);

app.get('/', (req, res) => res.send('API is running'));

// GET: Retrieve all books
app.get('/api/books', async (req, res) => {
    const books = await Book.find();
    res.json(books);
});

// GET: Retrieve a book by ID
app.get('/api/books/:id', async (req, res) => {
    const book = await Book.findById(req.params.id);
    res.json(book);
});

// POST: Add a new book
app.post('/api/books', async (req, res) => {
    const newBook = new Book(req.body);
    await newBook.save();
    res.json(newBook);
});

// PUT: Update a book by ID
app.put('/api/books/:id', async (req, res) => {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedBook);
});

// DELETE: Delete a book by ID
app.delete('/api/books/:id', async (req, res) => {
    await Book.findByIdAndDelete(req.params.id);
    res.json({ message: 'Book deleted' });
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
// JavaScript source code
