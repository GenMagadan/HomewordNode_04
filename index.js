const express = require('express');
const fs = require('fs');
const path = require('path');
const { checkBody, checkParams } = require('./validator/validator');
const { idScheme, bookScheme } = require('./validator/sheme');

const app = express();
app.use(express.json());

const filePath = path.join(__dirname, '/library.json');

app.get('/library', (req, res) => {
  res.send(fs.readFileSync(filePath));
});

app.post('/library', checkBody(bookScheme), (req, res) => {
  const books = JSON.parse(fs.readFileSync(filePath));
  const bookID = books.map(({ id }) => id);
  const uniqueID = (arr) => {
    let uniChecker = 1;
    for (i = 0; i < arr.length; i++) {
      if (uniChecker === arr[i]) {
        uniChecker++;
      }
    }
    return uniChecker;
  };

  books.push({
    id: uniqueID(bookID),
    ...req.body,
  });
  fs.writeFileSync(filePath, JSON.stringify(books));
  res.send({ id: uniqueID(bookID) });
});

app.get('/articles/:id', checkParams(idScheme), (req, res) => {
  const books = JSON.parse(fs.readFileSync(filePath));
  const book = books.find(
    (book) => book.id === Number(req.params.id)
  );
  if (book) {
    res.send({ book });
  } else {
    res.status(404);
    res.send({ book: null });
  }
});

app.put(
  '/library/:id',
  checkParams(idScheme),
  checkBody(bookScheme),
  (req, res) => {
    const books = JSON.parse(fs.readFileSync(filePath));
    const book = books.find(
      (book) => book.id === Number(req.params.id)
    );
    if (book) {
      book.author = req.body.author;
      book.book_title = req.body.book_title;
      book.number_of_book_characters =
        req.body.number_of_book_characters;
      book.genre = req.body.genre;
      fs.writeFileSync(filePath, JSON.stringify(books));
      res.send({ book });
    } else {
      res.status(404);
      res.send({ book: null });
    }
  }
);

app.delete('/library/:id', checkParams(idScheme), (req, res) => {
  const books = JSON.parse(fs.readFileSync(filePath));
  const book = books.find(
    (book) => book.id === Number(req.params.id)
  );
  if (book) {
    const bookIndex = books.indexOf(book);
    books.splice(bookIndex, 1);
    fs.writeFileSync(filePath, JSON.stringify(books));
    res.send({ book });
  } else {
    res.status(404);
    res.send({ book: null });
  }
});

app.listen(3000);
