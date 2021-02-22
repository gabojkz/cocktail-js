import t from"node-fetch";export default class{constructor(){}async getDrink(n){if(!n)return null;return(await(await async function(n){return t("https://www.thecocktaildb.com/api/json/v1/1/"+n)}(`search.php?s=${n}`)).json()).drinks||null}}
//# sourceMappingURL=cocktail.mjs.js.map
