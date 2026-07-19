const express = require('express');
const { readDB, writeDB } = require('../db');

const router = express.Router();

router.get('/', (req, res) => {
  const db = readDB();
  const q = req.query.q;

  if (q) {
    const pattern = new RegExp(RegExp.escape(q));
    const filtered = db.books.filter(
      b => pattern.test(b.title) || pattern.test(b.author)
    );
    return res.json(filtered);
  }

  res.json(db.books);
});

router.post('/', (req, res) => {
  const { title, author, read } = req.body;
  const db = readDB();

  const book = {
    id: db.nextId,
    title,
    author,
    read: read
  };

  db.books.push(book);
  db.nextId++;
  writeDB(db);

  res.json(book);
});

router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const db = readDB();

  const book = db.books.find(b => b.id === id);

  if (book == undefined)
  {
    res.status(404).json({"msg":"bro i dont have that"});
    return; // idk 
  }

  book.title = req.body.title;
  book.author = req.body.author;
  book.read = req.body.read;

  writeDB(db);
  res.json(book);
});

router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const db = readDB();
    
    
    let bookIndex = db.books.findIndex((val)=>val.id == id)

    if (bookIndex == -1)
    {
        res.status(404).json({ "msg": "da fuq?"});
        return;
    }

    db.books.splice(bookIndex,1);
    
    writeDB(db);

    res.status(200).json({ msg: "ok" });

});

module.exports = router;
