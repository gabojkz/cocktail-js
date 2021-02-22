'use strict';

var fetch = require('node-fetch');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var fetch__default = /*#__PURE__*/_interopDefaultLegacy(fetch);

/**
 * make api call
 * @param {string} path 
 * @returns {Promise}
 */

async function API(path) {
  const baseURL = "https://www.thecocktaildb.com/api/json/v1/1/"; // if you return the promise you can return custom errors or handle
  // the error in a different way, the down side is that you write more 
  // code to handle the error case

  return fetch__default['default'](baseURL + path);
}

/**
 * @class Cocktail
 */

class Cocktail {
  constructor() {}
  /**
   * get a drink
   * @method getDrink 
   * @param {string} name 
   * @returns {Promise} - drink full description, recipe, ingridients
   */


  async getDrink(name) {
    if (!name) return null;
    const response = await (await API(`search.php?s=${name}`)).json();
    return response.drinks || null;
  }

}

module.exports = Cocktail;
