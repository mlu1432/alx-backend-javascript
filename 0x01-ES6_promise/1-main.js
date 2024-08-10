// 1-main.js
import getFullResponseFromAPI from './1-promise.js';

// Handling success case
getFullResponseFromAPI(true)
  .then((response) => console.log(response))
  .catch((error) => console.error(error));

// Handling failure case
getFullResponseFromAPI(false)
  .then((response) => console.log(response))
  .catch((error) => console.error(error.message));
