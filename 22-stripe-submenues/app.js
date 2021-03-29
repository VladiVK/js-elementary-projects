import sublinks from './data.js';

const toggleBtn = get('.toggle-btn');
const closeBtn = get('.close-btn');
const sidebarWrapper = get('.sidebar-wrapper');
const sidebar = get('.sidebar-links');
const linkBtns = [...document.querySelectorAll('.link-btn')];
const submenu = get('.submenu');
const hero = get('.hero');
const nav = get('.nav');

toggleBtn.addEventListener('click', () => {
  sidebarWrapper.classList.add('show');
});
closeBtn.addEventListener('click', () => {
  sidebarWrapper.classList.remove('show');
});

// set sidebar
sidebar.innerHTML = sublinks
  .map((item) => {
    const { links, page } = item;
    return `<article>
    <h4>${page}</h4>
    <div class="sidebar-sublinks">
        ${links
          .map((link) => {
            return `<a href="${link.url}">
            <i class="${link.icon}"></i>${link.label}
            </a>`;
          })
          .join('')}
    </div> 
    </article>
    `;
  })
  .join('');

//   links for big screen
linkBtns.forEach((btn) => {
  // we need this, so fucntion(e)...
  btn.addEventListener('mouseover', function (e) {
    const text = e.currentTarget.textContent;
    const tempBtn = e.currentTarget.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;

    const tempPage = sublinks.find(({ page }) => page === text);

    if (tempPage) {
      const { page, links } = tempPage;

      submenu.classList.add('show');
      submenu.style.left = `${center}px`;
      submenu.style.top = `${bottom}px`;

      const columns = links.length > 3 ? 4 : links.length;
      submenu.innerHTML = `
        <section>
            <h4>${page}</h4>
            <div class='submenu-center col-${columns}'>
            ${links
              .map((item) => {
                return `<a href="${item.url}">
                    <i class="${item.icon}"></i> ${item.label}
                </a>`;
              })
              .join('')}
            </div>
        </section>
      `;
    }
  });
});

hero.addEventListener('mouseover', function () {
  submenu.classList.remove('show');
});
// we need this, so fucntion(e)...
nav.addEventListener('mouseover', function (e) {
  if (!e.target.classList.contains('link-btn')) {
    submenu.classList.remove('show');
  }
});

// helpers
function get(selector) {
  const element = document.querySelector(selector);
  if (element) return element;
  throw new Error(`No elems match your search. Check selector: "${selector}"`);
}
