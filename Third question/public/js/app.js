const searchInput = document.getElementById('search');
const addBtn = document.getElementById('add-btn');
const cancelBtn = document.getElementById('cancel-btn');

async function loadBooks(query) {
  const books = getBooks(query);
  render(books);
}

form.addEventListener('submit', async (event) => {
  const payload = {
    title: form.title.value,
    author: form.author.value,
    read: form.read.checked
  };

  if (editingId) {
    await updateBook(editingId, payload);
  } else {
    await createBook(payload);
  }

  closeModal();
  loadBooks(searchInput.value);
});

searchInput.addEventListener('input', (event) => {
  loadBooks(event.target.value);
});

addBtn.addEventListener('click', () => openModal(null));
cancelBtn.addEventListener('click', closeModal);

loadBooks();
