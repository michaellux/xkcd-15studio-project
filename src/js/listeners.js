/* eslint-disable no-param-reassign */
/* eslint-disable no-undef */
import loadComicsItem from './loadData';
import createNewState from './setState';
import insertData from './insertData';
import { getRandomInt } from './helpers';

const addListeners = (state) => {
  const prev = document.querySelector('.ui__prev');
  prev.addEventListener('click', () => {
    loadComicsItem(state.prev)
      .then((data) => createNewState(data, state))
      .then((data) => {
        state = data;
        insertData(state);
      });
  });

  const next = document.querySelector('.ui__next');
  next.addEventListener('click', () => {
    loadComicsItem(state.next)
      .then((data) => createNewState(data, state))
      .then((data) => {
        state = data;
        insertData(state);
      });
  });

  const first = document.querySelector('.ui__first');
  first.addEventListener('click', () => {
    loadComicsItem(1)
      .then((data) => createNewState(data, state))
      .then((data) => {
        state = data;
        insertData(state);
      });
  });

  const last = document.querySelector('.ui__last');
  last.addEventListener('click', () => {
    loadComicsItem(state.last)
      .then((data) => createNewState(data, state))
      .then((data) => {
        state = data;
        insertData(state);
      });
  });

  const random = document.querySelector('.ui__random');
  random.addEventListener('click', () => {
    loadComicsItem(getRandomInt(1, state.last + 1))
      .then((data) => createNewState(data, state))
      .then((data) => {
        state = data;
        insertData(state);
      });
  });
};

export default addListeners;
