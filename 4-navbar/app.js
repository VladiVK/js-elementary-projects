// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector('.nav-toggle');
const navlinks = document.querySelector('.links');

navToggle.addEventListener('click', () => {
  navlinks.classList.toggle('show-links');
  //   if (navlinks.classList.contains('show-links')) {
  //     navlinks.classList.remove('show-links');
  //   } else {
  //     navlinks.classList.add('show-links');
  //   }
});
