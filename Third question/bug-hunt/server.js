const express = require('express');
const path = require('path');

const booksRouter = require('./routes/books');
const logger = require('./middleware/logger');

const app = express();
const PORT = 3000;

app.use(logger);
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/books', booksRouter);


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
