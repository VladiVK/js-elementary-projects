const URL = `https://api.chucknorris.io/jokes/random`;

const btn = document.querySelector('.btn');
const content = document.querySelector('.content');
const image = document.querySelector('.container img');
btn.addEventListener('click', () => {
  fetch(URL)
    .then((data) => data.json())
    .then((response) => displayData(response))
    .catch((error) => console.log(eror));
});

function displayData({ value: joke }) {
  //   const { value: joke } = data;
  image.classList.add('shake-img');
  content.textContent = joke;

  const random = Math.floor(Math.random() * 1000);
  setTimeout(() => {
    image.classList.remove('shake-img');
  }, random);
}
