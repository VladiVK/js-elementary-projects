const URL = `https://api.chucknorris.io/jokes/random`;

const btn = document.querySelector('.btn');
const content = document.querySelector('.content');
const image = document.querySelector('.container img');
btn.addEventListener('click', async () => {
  try {
    const data = await fetch(URL);
    const response = await data.json();
    displayData(response);
  } catch (error) {
    console.log(error);
  }
});

function displayData({ value: joke }) {
  image.classList.add('shake-img');
  content.textContent = joke;

  const random = Math.floor(Math.random() * 1000);
  setTimeout(() => {
    image.classList.remove('shake-img');
  }, random);
}
