const colors = ['green', 'red', 'rgb(133,122,200)', '#f15025'];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
  const randomNumber = getRandomNumber();

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}

// btn.addEventListener('click', () => {
//   const newBgColor = getRandomColor();

//   document.body.style.backgroundColor = newBgColor;
//   color.textContent = newBgColor;
// });

// function getRandomColor() {
//   let lastColor = document.body.style.backgroundColor;
//   let newColor = lastColor;

//   do {
//     let randomNumber = Math.floor(Math.random() * colors.length);
//     newColor = colors[randomNumber];
//   } while (lastColor === newColor);

//   return newColor;
// }
