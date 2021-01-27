/* eslint-disable no-undef */
import { formatDate, encodeHTMLEntities } from './helpers';

const insertData = (state) => {
  const placeForComics = document.querySelector('.ui__comicsitem');
  const img = document.createElement('img');
  img.setAttribute('src', state.currentSlideUrl);
  img.setAttribute('class', 'ui__comicsItemImage');
  const transcript = document.createElement('p');
  transcript.setAttribute('class', 'ui__comicsItemTranscript');
  transcript.innerHTML = encodeHTMLEntities(state.transcript);
  placeForComics.append(img, transcript);

  const headerTitle = document.querySelector('.header__title');
  headerTitle.textContent = state.title;
  const header = document.querySelector('.header');
  const placeforDate = document.createElement('span');
  placeforDate.setAttribute('class', 'header__date');
  placeforDate.textContent = formatDate(state.date);
  header.append(placeforDate);
};

export default insertData;
