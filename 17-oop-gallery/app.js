// constructor function
function Gallery(element) {
  this.container = element; // ".nature" or ".city"
  this.list = [...element.querySelectorAll('.img')];

  // target
  this.modal = getElement('.modal'); // modal is independent
  this.modalImg = getElement('.main-img');
  this.imageName = getElement('.image-name');
  this.modalImages = getElement('.modal-images');
  this.closeBtn = getElement('.close-btn');
  this.prevBtn = getElement('.prev-btn');
  this.nextBtn = getElement('.next-btn');

  const self = this;
  // bind functions
  this.closeModal = this.closeModal.bind(this);
  this.nextImage = this.nextImage.bind(this);
  this.prevImage = this.prevImage.bind(this);
  // *********
  this.chooseImage = this.chooseImage.bind(this);
  // *******
  // this.openModal = this.openModal.bind(this); // bind *** this *** of Gallery
  // event listeners

  // нам нужен event, поэтому openModal оборачиваем в функцию
  // но теперь this от Gallery снова потерян, поэтому еще раз bind (или стрелочная (e) => {})
  // либо использовать self
  this.container.addEventListener(
    'click',
    function (e) {
      if (e.target.classList.contains('img')) {
        this.openModal(e.target, this.list);
      }
    }.bind(this)
  );
  // *** reference ****
  // this.container.addEventListener('click', function (e) {
  //   self.openModal(); // вызываем сразу
  // });
}
Gallery.prototype.openModal = function (selectedImg, list) {
  this.setMainImage(selectedImg);
  const selectedID = selectedImg.dataset.id;
  this.modalImages.innerHTML = list
    .map((image) => {
      return `<img
                class="${
                  selectedID === image.dataset.id
                    ? 'modal-img selected'
                    : 'modal-img'
                }"
                data-id="${image.dataset.id}"
                src="${image.src}"
                title="${image.title}"
                alt="${image.alt}"
      >`;
    })
    .join('');
  this.modal.classList.add('open');

  this.closeBtn.addEventListener('click', this.closeModal);
  this.nextBtn.addEventListener('click', this.nextImage);
  this.prevBtn.addEventListener('click', this.prevImage);
  this.modalImages.addEventListener('click', this.chooseImage);
};
Gallery.prototype.setMainImage = function (selectedImage) {
  this.modalImg.src = selectedImage.src;
  this.imageName.textContent = selectedImage.title;
};
Gallery.prototype.closeModal = function () {
  this.closeBtn.removeEventListener('click', this.closeModal);
  this.nextBtn.removeEventListener('click', this.nextImage);
  this.prevBtn.removeEventListener('click', this.prevImage);
  this.modal.classList.remove('open');
  this.modalImages.removeEventListener('click', this.chooseImage);
};
Gallery.prototype.nextImage = function () {
  const selected = this.modalImages.querySelector('.selected');
  // next or first in an array
  const next =
    selected.nextElementSibling || this.modalImages.firstElementChild;
  selected.classList.remove('selected');
  next.classList.add('selected');
  this.setMainImage(next);
};
Gallery.prototype.prevImage = function () {
  const selected = this.modalImages.querySelector('.selected');
  // next or first in an array
  const prev =
    selected.previousElementSibling || this.modalImages.lastElementChild;
  selected.classList.remove('selected');
  prev.classList.add('selected');
  this.setMainImage(prev);
};
Gallery.prototype.chooseImage = function (e) {
  if (e.target.classList.contains('modal-img')) {
    const selected = this.modalImages.querySelector('.selected');
    selected.classList.remove('selected');
    this.setMainImage(e.target);
    e.target.classList.add('selected');
  }
};

const nature = new Gallery(getElement('.nature'));
const city = new Gallery(getElement('.city'));

// *** helper ***
function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(
    `Please check "${selection}" selector, no such element exists`
  );
}
