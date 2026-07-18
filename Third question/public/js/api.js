async function getBooks(query) {
  const url = query
    ? `/api/books?q=${encodeURIComponent(query)}`
    : '/api/books';
  return fetch(url).then(res => res.json());
}

async function createBook(payload) {
  return fetch('/api/books', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
}

async function updateBook(id, payload) {
  return fetch(`/api/books/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
}

async function deleteBook(id) {
  return fetch(`/api/books/${id}`, { method: 'DELETE' });
}
