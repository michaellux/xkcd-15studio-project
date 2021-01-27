/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import loadComicsItem from './loadData';
import createNewState from './setState';
import insertData from './insertData';
import addListeners from './listeners';

let appState = {
  _title: null,
  get title() {
    return this._title;
  },
  set title(value) {
    this._title = value;
  },

  _transcript: null,
  get transcript() {
    return this._transcript;
  },
  set transcript(value) {
    this._transcript = value;
  },

  _currentSlideUrl: null,
  get currentSlideUrl() {
    return this._currentSlideUrl;
  },
  set currentSlideUrl(value) {
    this._currentSlideUrl = value;
  },

  _current: null,
  get current() {
    return this._current;
  },
  set current(value) {
    this._current = value;
  },

  _next: null,
  get next() {
    return this._next;
  },
  set next(value) {
    this._next = value;
  },

  _prev: null,
  get prev() {
    return this._prev;
  },
  set prev(value) {
    this._prev = value;
  },

  _last: null,
  get last() {
    return this._last;
  },
  set last(value) {
    this._last = value;
  },

  _date: null,
  get date() {
    return this._date;
  },
  set date(value) {
    this._date = value;
  },
};

loadComicsItem()
  .then((data) => createNewState(data, appState, true))
  .then((data) => {
    appState = data;
    insertData(appState);
    addListeners(appState);
  });
