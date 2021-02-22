import API from "./api";
import "@babel/polyfill";

/**
 * @class Cocktail
 */
export default class Cocktail  {
  constructor() {}

  /**
   * get a drink
   * @method getDrink 
   * @param {string} name 
   * @returns {Promise} - drink full description, recipe, ingridients
   */
  async getDrink(name) {
    if (!name) return null;

    const response = await ( await API(`search.php?s=${name}`, {
        mode: 'no-cors'
      })
    ).json();

    return response.drinks || null;
  }
}