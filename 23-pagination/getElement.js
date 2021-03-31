function getElement(selector) {
  const element = document.querySelector(selector);
  if (element) return element;
  throw new Error(
    `No elems match your search. Check your selector: "${selector}"`
  );
}
export default getElement;
