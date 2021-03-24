import people from './data.js';

const container = get('.slide-container');
const nextBtn = get('.next-btn');
const prevBtn = get('.prev-btn');

const persons = people
  .map((person, slideIndex) => {
    const { img, name, job, text } = person;
    let position = 'next';
    if (slideIndex === 0) position = 'active';
    if (slideIndex === people.length - 1) position = 'last';
    return `
    <article class="slide ${position}">
        <img class="img" src=${img} alt=${name}>
        <h4>${name}</h4>
        <p class="title">${job}</p>
        <p class="text">${text}</p>
        <div class="quote-icon">
          <div class="fas fa-quote-right"></div>
        </div>
    </article>`;
  })
  .join('');
container.innerHTML = persons;

// helper
function get(selector) {
  const element = document.querySelector(selector);
  if (element) return element;
  throw new Error(
    `no elements match your search. Check selector: "${selector}"`
  );
}
function getMultiple(selector) {
  const elements = document.querySelectorAll(selector);
  if (elements) return elements;
  throw new Error(
    `no elements match your search. Check selector: "${selector}"`
  );
}
