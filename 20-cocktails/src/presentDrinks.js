import fetchDrinks from './fetchDrinks.js';
import displayDrinks from './displayDrinks.js';
import setDrink from './setDrink.js';

const presentDrinks = async (url) => {
  // *** fetch drinks
  const data = await fetchDrinks(url);
  // *** display drinks
  // технически ждать необязательно,
  // но в нашем случае - важно, так как будем потом динамически
  //переходить на отдельные страницы
  const section = await displayDrinks(data);
  if (section) {
    setDrink(section);
  }
};

export default presentDrinks;
