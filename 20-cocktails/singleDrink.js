import fetchDrinks from './src/fetchDrinks.js';
import displayDrink from './src/displaySingleDrink.js';

const presentDrink = async () => {
  const id = JSON.parse(localStorage.getItem('drink'));
  if (!id) {
    window.location.replace('index.html');
  } else {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
    const drink = await fetchDrinks(url);
    displayDrink(drink);
  }
};
window.addEventListener('DOMContentLoaded', presentDrink);
