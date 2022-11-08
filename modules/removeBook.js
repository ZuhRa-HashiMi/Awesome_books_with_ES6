/* eslint-disable linebreak-style */
/* eslint-disable import/newline-after-import */
/* eslint-disable indent */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable linebreak-style */
import Books from './Book.js';
import snaker from './flashMessage.js';
export default function removeBk() {
    const Book = new Books();
    Book.removeBook(this.id);
    this.parentNode.parentNode.remove();
    snaker('remove', '<b> Remove:</b> Book Removed successfully ', 4000);
  }