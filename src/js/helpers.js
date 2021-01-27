/* eslint-disable no-param-reassign */
/* eslint-disable no-undef */
function formatDate(date) {
  let dd = date.getDate();
  if (dd < 10) dd = `0${dd}`;

  let mm = date.getMonth() + 1;
  if (mm < 10) mm = `0${mm}`;

  let yy = date.getFullYear() % 100;
  if (yy < 10) yy = `0${yy}`;

  return `${dd}.${mm}.${yy}`;
}

/* https://tertiumnon.medium.com/js-how-to-decode-html-entities-8ea807a140e5 */
function encodeHTMLEntities(text) {
  const textArea = document.createElement('textarea');
  textArea.innerText = text;
  return textArea.innerHTML;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

export { formatDate, encodeHTMLEntities, getRandomInt };
