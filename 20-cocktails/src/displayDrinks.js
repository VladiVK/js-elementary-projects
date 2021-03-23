import get from './getElement.js';
import { hideLoading } from './toggleLoading.js';

const displayDrinks = ({ drinks }) => {
  const section = get('.section-center');
  const title = get('.title');
  // *** do not have drinks
  if (!drinks) {
    hideLoading();
    title.textContent = `sorry, no drinks match your search`;
    section.innerHTML = null;
    return;
  }
  // *** have drinks
  const newDrinks = drinks
    .map((drink) => {
      const { idDrink: id, strDrink: name, strDrinkThumb: image } = drink;
      return `
      <a href="./drink.html">
        <article class="cocktail" data-id=${id}>
          <img src=${image} alt="cocktail">
          <h3>${name}</h3>
        </article>
      </a>`;
    })
    .join('');
  //   hide loading
  hideLoading();
  // set content
  title.textContent = ``;
  section.innerHTML = newDrinks;
  return section;
};
export default displayDrinks;
