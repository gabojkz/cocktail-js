import fetch from "node-fetch";

/**
 * make api call
 * @param {string} path 
 * @returns {Promise}
 */
export default async function API(path) {
  const baseURL = "https://www.thecocktaildb.com/api/json/v1/1/";
  
  // if you return the promise you can return custom errors or handle
  // the error in a different way, the down side is that you write more 
  // code to handle the error case
  return fetch(baseURL + path);
}