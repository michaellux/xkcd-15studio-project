/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import loadLastComicsItem from './loadData';
import createNewState from './setState';
import insertData from './insertData';

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

  _numberOfLastSlide: null,
  get numberOfLastSlide() {
    return this._numberOfLastSlide;
  },
  set numberOfLastSlide(value) {
    this._numberOfLastSlide = value;
  },

  _date: null,
  get date() {
    return this._date;
  },
  set date(value) {
    this._date = value;
  },
};

loadLastComicsItem()
  .then((data) => createNewState(data))
  .then((data) => { appState = data; insertData(appState); });
