const searchInput = document.getElementById('search');
const addBtn = document.getElementById('add-btn');
const cancelBtn = document.getElementById('cancel-btn');

async function loadBooks(query) {
  const books = await getBooks(query);
  render(books);
}

function showMessageSnack(msg) {
  var x = document.getElementById("snackbar");
  x.className = "show";
  x.innerText = msg
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}



form.addEventListener('submit', async (event) => {
  const payload = {
    title: form.title.value,
    author: form.author.value,
    read: form.read.checked
  };

  if (editingId) {
    let result = await updateBook(editingId, payload);

    if (result.status != 200)
    {
        showMessageSnack(`Status code: ${result.status}\n Message: ${(await result.json()).msg}`)
    }

  } else {
    
    let result = await createBook(payload);

    if (result.status != 200)
    {
        showMessageSnack(`Status code: ${result.status}\n Message: ${(await result.json()).msg}`)
    }
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
