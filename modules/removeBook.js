import Books from './Book.js';
import snaker from './flashMessage.js';

const removeBk = () => {
  const Book = new Books();
  Book.removeBook(this.id);
  this.parentNode.parentNode.remove();
  snaker('remove', '<b> Remove:</b> Book Removed successfully ', 4000);
};

export default removeBk;
