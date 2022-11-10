import Books from './modules/Books.js';
import snaker from './modules/flashMessage.js';
import showBlock from './modules/navbar.js';
import removeBk from './modules/removeBook.js';
import startTime from './modules/setTime.js';

startTime();

// navbar sectin

const links = document.querySelectorAll('.links');
links.forEach((element) => {
  element.addEventListener('click', function () {
    showBlock(element.id);
    const current = document.getElementsByClassName('active');
    current[0].className = current[0].className.replace(' active', '');
    this.className += ' active';
  });
});

//  display all the books;

if (localStorage.getItem('books') !== null) {
  const books = JSON.parse(localStorage.getItem('books'));
  books.forEach((element) => {
    Books.displayBook(element);
  });
}

// add book function
const title = document.getElementById('title');
const author = document.getElementById('author');

document.querySelector('#book-form').addEventListener('submit', (e) => {
  if (title.value === '' || author.value === '') {
    snaker(
      'error',
      '<b>Error:</b> Title and Author fields must be filled out',
      4000,
    );

    e.preventDefault();
  } else {
    const addBk = new Books(title.value, author.value);
    addBk.addBook();
    snaker('success', '<b> Success: </b> Book Saved successfully!', 4000);

    title.value = '';
    author.value = '';
  }
});

// Remove book

const btn = document.querySelectorAll('.btn');
btn.forEach((element) => {
  element.addEventListener('click', removeBk);
});
