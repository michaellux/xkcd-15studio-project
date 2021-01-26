/* eslint-disable no-undef */
import 'regenerator-runtime/runtime';

const getLastComicsItem = async () => {
  const corsURL = 'https://cors-anywhere.herokuapp.com/';
  const url = 'https://xkcd.com/info.0.json';
  const response = await fetch(corsURL + url);

  if (response.ok) {
    console.log('GOOD');
  } else {
    console.log(`err ${response.status}`);
  }
};

export default getLastComicsItem;
