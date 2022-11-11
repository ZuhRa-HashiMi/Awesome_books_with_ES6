export default class Books {
  constructor(title = '', author = '') {
    this.title = title;
    this.author = author;
    this.books = localStorage.getItem('books') !== null
      ? JSON.parse(localStorage.getItem('books'))
      : '';
  }

  saveBook(BTSave = this.books) {
    const storeBook = JSON.stringify(BTSave);
    localStorage.setItem('books', storeBook);
  }

  addBook() {
    if (this.books === '' || this.books.length <= 0) {
      this.books = [
        {
          Id: 1,
          Btitle: this.title,
          Bauthor: this.author,
        },
      ];
      this.saveBook();
    } else {
      const lastId = this.books[this.books.length - 1].Id + 1;
      const book = {
        Id: lastId,
        Btitle: this.title,
        Bauthor: this.author,
      };
      this.books.push(book);
      this.saveBook();
    }
  }

  removeBook(bookId) {
    const remove = this.books.filter((book) => book.Id !== Number(bookId));
    this.saveBook(remove);
  }

  static displayBook(book) {
    const list = document.querySelector('.books_table');
    const row = document.createElement('tr');
    row.innerHTML = ` <td>${book.Btitle}</td> 
      <td>${book.Bauthor}</td> <td>
      <button type="submit" id="${book.Id}" class="btn">Remove</button></td> `;
    list.appendChild(row);
  }
}
