import { hideLoading } from './toggleLoading.js';
import get from './getElement.js';

const displayDrink = (data) => {
  hideLoading();
  const drink = data.drinks[0];
  const {
    idDrink: id,
    strDrink: name,
    strInstructions: desc,
    strDrinkThumb: image,
  } = drink;
  const ingredientsList = [
    drink.strIngredient1,
    drink.strIngredient2,
    drink.strIngredient3,
    drink.strIngredient4,
    drink.strIngredient5, //null
    drink.strIngredient6, //null
  ];

  const img = get('.drink-img');
  const drinkName = get('.drink-name');
  const decription = get('.drink-desc');
  const ingredients = get('.drink-ingredients');
  img.src = image;
  drinkName.textContent = name;
  decription.textContent = desc;
  ingredients.innerHTML = ingredientsList
    .map((item) => {
      if (!item) return;
      return `<li><i class="far fa-check-square"></i>${item}</li>`;
    })
    .join('');
  document.title = `Cocktail ${name}`;
  console.log(drink, ingredientsList);
};
export default displayDrink;
