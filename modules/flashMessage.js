/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
export default snaker = (type, mes, time) => {
  const para = document.createElement('p');
  para.classList.add('snakbar');
  para.innerHTML = `${mes} `;
  if (type === 'error') {
    para.classList.add('error');
  } else if (type === 'success') {
    para.classList.add('success');
  } else if (type === 'remove') {
    para.classList.add('remove');
  }
  snakbar.appendChild(para);
  para.classList.add('fadeout');
  setTimeout(() => {
    snakbar.removeChild(para);
  }, time);
};
