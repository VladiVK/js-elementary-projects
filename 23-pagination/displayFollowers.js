import get from './getElement.js';

//   <div class="btn-container"></div>
// avatar_url;
// login
const container = get('.container');

const display = (followers) => {
  const users = followers
    .map((user) => {
      const { login, avatar_url: img, html_url: profile } = user;
      return `
      <article class='card'>
        <img src='${img}' alt='${login}' />
        <h4>${login}</h4>
        <a href='${profile}' class='btn'>view profile</a>
       </article>`;
    })
    .join('');

  container.innerHTML = users;
};

export default display;
