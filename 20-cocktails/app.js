import presentDrinks from './src/presentDrinks.js';

const URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a`;
const ID = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007`;

// const handleCocktails = (data) => {
//   const cocktails = data.map((item) => {
//     const { strDrink: drink, idDrink: id } = item;
//     return { drink, id };
//   });
//   console.log(cocktails);
// };
// const getCocktails = async () => {
//   const response = await fetch(URL);
//   const parsedData = await response.json();
//   const cocktails = parsedData.drinks;
//   console.log(cocktails);
//   handleCocktails(cocktails);
// };
let demo;
window.addEventListener('DOMContentLoaded', () => {
  presentDrinks(URL);
});
