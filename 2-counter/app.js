let counter = 0;
const value = document.getElementById('value');
const buttons = document.querySelectorAll('.btn');

buttons.forEach((btn) => {
  btn.addEventListener('click', function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains('decrease')) {
      counter--;
    }
    if (styles.contains('increase')) {
      counter++;
    }
    if (styles.contains('reset')) {
      counter = 0;
    }

    if (counter > 0) value.style.color = 'green';
    if (counter < 0) value.style.color = 'red';
    if (counter === 0) value.style.color = 'black';

    value.textContent = counter;
  });
});

// ******** Alternative

// let counter = 0;
// const buttons = document.querySelectorAll('.btn');
// const value = document.getElementById('value');

// buttons.forEach((btn) => {
//   btn.addEventListener('click', handleValue);
// });

// function handleValue(e) {
//   const classValue = e.currentTarget.classList;

//   switch (true) {
//     case classValue.contains('increase'):
//       counter++;
//       break;
//     case classValue.contains('decrease'):
//       counter--;
//       break;
//     case classValue.contains('reset'):
//       counter = 0;
//       break;
//     default:
//       break;
//   }

// if (counter > 0) value.style.color = 'green';
// if (counter < 0) value.style.color = 'red';
// if (counter === 0) value.style.color = 'black';

//   value.textContent = counter;
// }
