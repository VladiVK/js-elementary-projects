import fetchFollowers from './fetchFollowers.js';
import displayFollowers from './displayFollowers.js';
import paginate from './paginate.js';
import displayButtons from './displayButtons.js';

import get from './getElement.js';

const title = get('.section-title h1');

const init = async () => {
  const followers = await fetchFollowers();
  displayFollowers(followers);
  title.textContent = 'pagination';

  const pages = paginate(followers);
  console.log('Paginate: ', pages);
};
window.addEventListener('load', init);