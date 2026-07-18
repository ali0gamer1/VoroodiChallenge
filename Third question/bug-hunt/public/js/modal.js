const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const form = document.getElementById('book-form');

let editingId = null;

function openModal(book) {
  editingId = book ? book.id : null;
  modalTitle.textContent = book ? 'ویرایش کتاب' : 'افزودن کتاب';
  form.title.value = book ? book.title : '';
  form.author.value = book ? book.author : '';
  form.read.checked = book ? book.read : false;
  modal.classList.remove('modal-hidden');
  modal.classList.add('modal-visible');
  
}

function closeModal() {

  modal.classList.remove('modal-visible');  
  modal.classList.add('modal-hidden');
  editingId = null;
}
