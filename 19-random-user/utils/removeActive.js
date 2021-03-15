// remove '.active' class from btns
export default function removeActive(items) {
  items.forEach((item) => item.classList.remove('active'));
}
