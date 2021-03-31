const displayButtons = (container, pages, activeIndex) => {
  const btns = pages.map((_, pageIndex) => {
    const isActive = pageIndex === activeIndex ? 'active-btn' : 'null';
    return `
      <button data-index="${pageIndex}" class="page-btn ${isActive}">${
      pageIndex + 1
    }</button>
      `;
  }); // it is still an array
  btns.unshift(`<button class="prev-btn">prev</button>`);
  btns.push(`<button class="next-btn">next</button>`);
  container.innerHTML = btns.join(''); // did .join('') only at this step !!!
};

export default displayButtons;
