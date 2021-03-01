function Counter(element, value) {
  this.counter = element;
  this.value = value;

  this.resetBtn = element.querySelector('.reset');
  this.increaseBtn = element.querySelector('.increase');
  this.decreaseBtn = element.querySelector('.decrease');

  this.valueDOM = element.querySelector('.value');
  this.valueDOM.textContent = this.value;

  // 1 option
  //  this.increaseBtn.addEventListener('click', this.increase.bind(this));
  //  this.decreaseBtn.addEventListener('click', this.decrease.bind(this));
  //  this.resetBtn.addEventListener('click', this.reset.bind(this));

  //   2 option: preliminary bind ****this**** to all functions !!!
  this.increase = this.increase.bind(this);
  this.decrease = this.decrease.bind(this);
  this.reset = this.reset.bind(this);

  this.increaseBtn.addEventListener('click', this.increase);
  this.decreaseBtn.addEventListener('click', this.decrease);
  this.resetBtn.addEventListener('click', this.reset);
}

Counter.prototype.increase = function () {
  this.value++;
  this.valueDOM.textContent = this.value;
};
Counter.prototype.decrease = function () {
  this.value--;
  this.valueDOM.textContent = this.value;
};
Counter.prototype.reset = function () {
  this.value = 0;
  this.valueDOM.textContent = this.value;
};

const firstCounter = new Counter(getElement('.first-counter'), 100);
const secondCounter = new Counter(getElement('.second-counter'), 200);

// *** Helper functions ****

function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(`Please check "${selection}", no such element exist`);
}
