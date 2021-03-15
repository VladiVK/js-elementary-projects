const URL = `https://api.chucknorris.io/jokes/random`;

const btn = document.querySelector('.btn');
const content = document.querySelector('.content');
const image = document.querySelector('.container img');
btn.addEventListener('click', () => {
  getData(URL)
    .then((response) => displayData(response))
    .catch((err) => console.log(err));
});

function getData(url) {
  return new Promise((resolve, reject) => {
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', url);
    xhttp.send();
    xhttp.onreadystatechange = function () {
      if (xhttp.readyState !== 4) return; // do nothing
      if (xhttp.status === 200) {
        resolve(xhttp.responseText);
      } else {
        reject({
          status: xhttp.status,
          text: xhttp.statusText,
        });
      }
    };
  });
}

function displayData(data) {
  const { value: joke } = JSON.parse(data);
  image.classList.add('shake-img');
  content.textContent = joke;

  const random = Math.floor(Math.random() * 1000);
  setTimeout(() => {
    image.classList.remove('shake-img');
  }, random);
}
