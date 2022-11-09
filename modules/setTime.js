import DateTime from './luxon.js';

const startTime = () => {
  const localTime = DateTime.local();
  const timeNow = document.querySelector('.time');
  timeNow.innerText = `${localTime.toLocaleString(
    DateTime.DATE_FULL,
  )}, ${localTime.toLocaleString(DateTime.TIME_WITH_SECONDS)}`;
  setTimeout(startTime, 1000);
};

export default startTime;