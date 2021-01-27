/* eslint-disable no-undef */
import 'regenerator-runtime/runtime';

const loadLastComicsItem = async () => {
  const corsURL = 'https://cors-anywhere.herokuapp.com/';
  const url = 'https://xkcd.com/614/info.0.json';
  const response = await fetch(corsURL + url);
  let json = null;
  if (response.ok) {
    json = await response.json();
  } else {
    console.log(`err ${response.status}`);
  }

  return json;
};

export default loadLastComicsItem;
