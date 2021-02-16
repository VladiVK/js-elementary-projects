const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

const tempDate = new Date();
const tempYear = tempDate.getFullYear();
const tempMonth = tempDate.getMonth();
const tempDay = tempDate.getDate();

// let futureDate = new Date(2021, 3, 21, 10, 30, 0);
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);

const year = futureDate.getFullYear();
const month = months[futureDate.getMonth()];
const day = futureDate.getDate();
const weekDay = weekdays[futureDate.getDay()];
const hours = futureDate.getHours();
const mins = futureDate.getMinutes();

giveaway.textContent = `giveaway ends on ${weekDay}, ${day} ${month} ${year} ${hours}:${mins}am`;

// future time im ms
const futureTime = futureDate.getTime();

function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;

  // 1s = 1000ms
  // 1 min = 60s
  // 1 hr = 60min
  // 1 day = 24hr

  // values in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  // calculate all values

  let days = Math.floor(t / oneDay);
  // (t % oneDay) === полные дни
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  const values = [days, hours, minutes, seconds];

  const formatValue = (value) => {
    if (value < 10) {
      return `0${value}`;
    }
    return value;
  };
  // put values for each <h4>
  items.forEach((item, index) => {
    // item.innerHTML = values[index] > 10 ? values[index] : `0${values[index]}`;
    item.innerHTML = formatValue(values[index]);
  });
  if (t < 0) {
    clearInterval(countDown);
    deadline.innerHTML = `<h4 class="expired">sorry this giveaway has expired</h4>`;
  }
}
// start countdown
const countDown = setInterval(getRemainingTime, 1000);

// важно вызвать после интервала countDown, чтобы она могла его использовать
// для очистки
getRemainingTime();
