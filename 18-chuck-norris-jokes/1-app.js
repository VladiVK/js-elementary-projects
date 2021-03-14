const URL = `https://api.chucknorris.io/jokes/random`;

const btn = document.querySelector('.btn');
const content = document.querySelector('.content');

btn.addEventListener('click', () => getData(URL));

function getData(url) {
  const xhttp = new XMLHttpRequest();
  xhttp.open('GET', url);
  xhttp.send();
  xhttp.onreadystatechange = function () {
    if (xhttp.readyState !== 4) return; // do nothing
    if (xhttp.status === 200) {
      const { value: joke } = JSON.parse(xhttp.responseText);
      content.textContent = joke;
    } else {
      console.log({
        status: xhttp.status,
        text: xhttp.statusText,
      });
    }
  };
}
