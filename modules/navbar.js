// navbar section

export default function showBlock(e) {
  const sectionList = document.getElementById('list');
  const sectionAdd = document.getElementById('add_book');
  const sectionContact = document.getElementById('contact');
  switch (e) {
    case 'list-link':
      sectionList.style.display = 'block';
      sectionAdd.style.display = 'none';
      sectionContact.style.display = 'none';
      break;

    case 'add-link':
      sectionAdd.style.display = 'block';
      sectionList.style.display = 'none';
      sectionContact.style.display = 'none';
      break;

    case 'contact-link':
      sectionContact.style.display = 'flex';
      sectionAdd.style.display = 'none';
      sectionList.style.display = 'none';
      break;

    default:
      sectionAdd.style.display = 'block';
      sectionList.style.display = 'none';
      sectionContact.style.display = 'none';
      break;
  }
}
