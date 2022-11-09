/* eslint-disable no-undef */
import Books from './Book.js';
import snaker from './flashMessage.js';

export default removeBk = () => {
  const Book = new Books();
  Book.removeBook(this.id);
  this.parentNode.parentNode.remove();
  snaker('remove', '<b> Remove:</b> Book Removed successfully ', 4000);
};
