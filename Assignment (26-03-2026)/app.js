const express = require("express");
const app = express();

app.use(express.json());

let books = [];
let authors = [];

// GET all books
app.get("/books", (req, res) => {
  res.json(books);
});

// ADD book
app.post("/books", (req, res) => {
  const { title, author } = req.body;

  if (!title || !author) {
    return res.status(400).json({ error: "Missing fields" });
  }

  const newBook = { id: books.length + 1, title, author };
  books.push(newBook);

  res.status(201).json(newBook);
});

// AUTHORS
app.get("/authors", (req, res) => res.json(authors));

app.post("/authors", (req, res) => {
  const { name } = req.body;

  const newAuthor = { id: authors.length + 1, name };
  authors.push(newAuthor);

  res.status(201).json(newAuthor);
});

app.listen(3000, () => console.log("Server running on port 3000"));
