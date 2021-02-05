// ************ using selectors inside the element *************
// <article class="question">
//  текущий question должен равняться question от кнопки !!!
const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
  const btn = question.querySelector('.question-btn');

  btn.addEventListener('click', () => {
    questions.forEach((questionTwin) => {
      if (questionTwin !== question) {
        questionTwin.classList.remove('show-text');
      }
    });

    question.classList.toggle('show-text');
  });
});

// ********** traversing the dom ******************

// const buttons = document.querySelectorAll('.question-btn');
// const questionText = document.querySelector('.question-text');

// buttons.forEach((btn) => {
//   btn.addEventListener('click', (e) => {
//     const question = e.currentTarget.parentElement.parentElement;
//     question.classList.toggle('show-text');
//   });
// });
