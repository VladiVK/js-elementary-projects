// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
document.querySelector('.date').innerHTML = new Date().getFullYear();

// ********** close links ************

const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click', () => {
  //   linksContainer.classList.toggle('show-links');
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

// ********** fixed navbar & top link ************
const navBar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');

window.addEventListener('scroll', () => {
  const scrollHeight = window.pageYOffset;
  const navBarHeight = navBar.getBoundingClientRect().height;

  if (scrollHeight > navBarHeight) {
    navBar.classList.add('fixed-nav');
  } else {
    navBar.classList.remove('fixed-nav');
  }

  if (scrollHeight > 500) {
    topLink.classList.add('show-link');
  } else {
    topLink.classList.remove('show-link');
  }
});

// ********** smooth scroll ************
const scrollLinks = document.querySelectorAll('.scroll-link');
scrollLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    // event prevent default: now... any link does not work !!!!
    e.preventDefault();
    // navigate to specific DOM spot
    const id = e.currentTarget.getAttribute('href').slice(1);
    const elem = document.getElementById(id);

    // calculate the heights
    const navBarHeight = navBar.getBoundingClientRect().height;
    const linksContainerHeight = linksContainer.getBoundingClientRect().height;
    // если фиксирован, то вырван из потока !!!
    const isFixedNav = navBar.classList.contains('fixed-nav');

    let position = elem.offsetTop - navBarHeight;

    if (!isFixedNav) {
      position = position - navBarHeight;
    }
    // for small screen! if links container is open, we need care about it...
    if (navBarHeight > 82) {
      position = position + linksContainerHeight;
    }

    window.scrollTo({
      top: position,
      left: 0,
      behavior: 'smooth',
    });
    // hide links container
    linksContainer.style.height = 0;
  });
});
// select links
