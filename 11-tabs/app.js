const btns = document.querySelectorAll('.tab-btn');

const about = document.querySelector('.about');
const articles = document.querySelectorAll('.content');

about.addEventListener('click', (e) => {
  const id = e.target.dataset.id;

  if (id) {
    //   remove active class for all btns
    btns.forEach((btn) => btn.classList.remove('active'));
    // add active to current event
    e.target.classList.add('active');
    //   remove active class for all articles
    articles.forEach((artcile) => artcile.classList.remove('active'));
    // add active to current article
    document.getElementById(id).classList.add('active');
  }
});
