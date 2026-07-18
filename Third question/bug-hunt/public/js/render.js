const booksContainer = document.getElementById('books');
const emptyMessage = document.getElementById('empty');

function render(books) {
  booksContainer.innerHTML = '';

  if (books.length === 0) {
    emptyMessage.classList.remove('empty-hidden');
    return;
  }
  emptyMessage.classList.add('empty-hidden');

  for (let i = 0; i < books.length; i++) {
    const book = books[i];

    const card = document.createElement('div');
    card.className = 'book';
    card.innerHTML = `
      <h3>${book.title}</h3>
      <p class="author">${book.author}</p>
      <span class="status ${book.read ? 'read' : ''}">
        ${book.read ? 'خوانده شده' : 'خوانده نشده'}
      </span>
      <div class="actions">
        <button class="edit">ویرایش</button>
        <button class="delete">حذف</button>
      </div>
    `;

    card.querySelector('.edit').addEventListener('click', () => {
      openModal(book);
    });
    card.querySelector('.delete').addEventListener('click', async () => {
      await deleteBook(book.id);
      loadBooks(null);  
    });

    booksContainer.appendChild(card);
  }
}
