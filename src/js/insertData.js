/* eslint-disable no-undef */
import { formatDate, encodeHTMLEntities } from './helpers';

const insertData = (state) => {
  const placeForComics = document.querySelector('.comicsitem__content');

  const img = document.createElement('img');
  img.setAttribute('src', state.currentSlideUrl);
  img.setAttribute('class', 'ui__comicsItemImage');
  const transcript = document.createElement('p');
  transcript.setAttribute('class', 'ui__comicsItemTranscript');
  transcript.innerHTML = encodeHTMLEntities(state.transcript);

  placeForComics.innerHTML = '';
  placeForComics.append(img, transcript);

  const headerTitle = document.querySelector('.ui__title');
  headerTitle.textContent = state.title;

  const placeforDate = document.querySelector('.header__date');
  placeforDate.textContent = formatDate(state.date);
};

export default insertData;
