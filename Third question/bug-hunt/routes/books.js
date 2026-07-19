const express = require('express');
const { readDB, writeDB } = require('../db');

const router = express.Router();

function normalizeReadValue(value) { //AI added this. i dont think it's necessary.
  if (value === true || value === 'true' || value === 'on' || value === '1' || value === 1) {
    return true;
  }

  if (value === false || value === 'false' || value === 'off' || value === '0' || value === 0) {
    return false;
  }

  return null;
}

function validateBookInput(body) {
  const title = typeof body.title === 'string' ? body.title.trim() : '';
  const author = typeof body.author === 'string' ? body.author.trim() : '';
  const read = normalizeReadValue(body.read);

  if (!title || !author || read === null) {
    return null;
  }

  return { title, author, read };
}





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
  const db = readDB();
  const validated = validateBookInput(req.body);

  if (!validated) {
    return res.status(400).json({ msg: 'invalid book data' });
  }

  const book = {
    id: db.nextId,
    ...validated
  };

  db.books.push(book);
  db.nextId++;
  writeDB(db);

  res.status(200).json({ msg: 'ok' });
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

  const validated = validateBookInput(req.body);

  if (!validated) {
    return res.status(400).json({ msg: 'invalid book data' });
  }
 
  book.title = validated.title;
  book.author = validated.author;
  book.read = validated.read;

  writeDB(db);
  res.status(200).json({ msg: 'ok' });
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
