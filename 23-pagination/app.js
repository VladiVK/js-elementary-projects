import fetchFollowers from './fetchFollowers.js';
import displayFollowers from './displayFollowers.js';
import paginate from './paginate.js';
import displayButtons from './displayButtons.js';

import get from './getElement.js';

const title = get('.section-title h1');
const btnContainer = get('.btn-container');

let index = 0;
let pages = [];

const setupUI = () => {
  displayFollowers(pages[index]);
  displayButtons(btnContainer, pages, index);
};

const init = async () => {
  const followers = await fetchFollowers();
  title.textContent = 'pagination';

  pages = paginate(followers);
  setupUI();
};

btnContainer.addEventListener('click', function (e) {
  const currentEvent = e.target;
  if (currentEvent.classList.contains('btn-container')) return;

  if (currentEvent.classList.contains('page-btn')) {
    index = parseInt(e.target.dataset.index);
  }
  if (e.target.classList.contains('next-btn')) {
    index = index >= pages.length - 1 ? 0 : index + 1;
  }
  if (e.target.classList.contains('prev-btn')) {
    index = index <= 0 ? pages.length - 1 : index - 1;
  }
  setupUI();
});
window.addEventListener('load', init);
