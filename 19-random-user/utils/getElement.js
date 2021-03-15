const getElement = (selector) => {
  const element = document.querySelector(selector);
  if (element) return element;
  throw new Error(`Element is not selected. Check selector "${selector}"`);
};
export default getElement;
