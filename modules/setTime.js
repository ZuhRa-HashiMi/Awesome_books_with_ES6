/* eslint-disable no-undef */
const startTime = () => {
  const localTime = luxon.DateTime.local();
  const timeNow = document.querySelector('.time');
  timeNow.innerText = `${localTime.toLocaleString(
    luxon.DateTime.DATE_FULL,
  )}, ${localTime.toLocaleString(luxon.DateTime.TIME_WITH_SECONDS)}`;
  setTimeout(startTime, 1000);
};
export default startTime;