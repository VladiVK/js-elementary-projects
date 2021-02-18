// ****** SELECT ITEMS **********
const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const grocery = document.querySelector('#grocery');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');

// edit option
let editElement;
let editFlag = false;
let editID = '';
// ****** EVENT LISTENERS **********
form.addEventListener('submit', addItem);
clearBtn.addEventListener('click', clearItems);
// ****** FUNCTIONS **********
function addItem(e) {
  e.preventDefault();
  const value = grocery.value;
  const id = new Date().getTime().toString();

  if (value && !editFlag) {
    const elem = document.createElement('article');
    // add class
    elem.classList.add('grocery-item');
    // add ID
    const attrID = document.createAttribute('data-id');
    attrID.value = id;
    elem.setAttributeNode(attrID);

    elem.innerHTML = `<p class="title">${value}</p>
          <div class="btn-container">
            <button class="edit-btn" type="button">
              <i class="fas fa-edit"></i>
            </button>
            <button class="delete-btn" type="button">
              <i class="fas fa-trash"></i>
            </button>
          </div>`;
    // buttons events
    const deleteBtn = elem.querySelector('.delete-btn');
    const editBtn = elem.querySelector('.edit-btn');

    deleteBtn.addEventListener('click', removeItem);
    editBtn.addEventListener('click', editItem);

    // append child
    list.appendChild(elem);
    // diplay success alert
    displayAlert('item was successfully added', 'success');
    // show container
    container.classList.add('show-container');
    // add to local storage
    addToLocalStorage(id, value);
    // set back to defult
    setBackToDafault();
  } else if (value && editFlag) {
    // editElement === <p class="title">
    // просто меняем его html
    editElement.innerHTML = value;
    displayAlert('value changed success', 'success');
    // edit local storage
    editLocalStorage(editID, value);
    // set back to defult
    setBackToDafault();
  } else {
    displayAlert('please enter data', 'danger');
  }
}
// remove single item
function removeItem(e) {
  const elem = e.currentTarget.parentElement.parentElement;
  const elemId = elem.dataset.id;
  list.removeChild(elem);
  if (list.children.length < 1) {
    // hide container
    container.classList.remove('show-container');
    // alert
    displayAlert('item removed', 'danger');
    // set default
    setBackToDafault();
    // remove from localStorage
    removeFromLocalStorage(elemId);
  }
}

function editItem(e) {
  const article = e.currentTarget.parentElement.parentElement;
  const articleID = article.dataset.id;

  // edit element: our <p class="title">
  editElement = e.currentTarget.parentElement.previousElementSibling;
  grocery.value = editElement.innerHTML;

  editFlag = true;
  editID = articleID;
  submitBtn.textContent = 'edit';
}
// clear all item
function clearItems() {
  // clear .grocery-list
  const items = document.querySelectorAll('.grocery-item');
  if (items.length > 0) {
    items.forEach((item) => list.removeChild(item));
  }
  // hide container
  container.classList.remove('show-container');
  // show alert
  displayAlert('all items were deleted', 'danger');
  // clear localStorage
  localStorage.removeItem('list');
  // set default
  setBackToDafault();
}
// display alert
function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);
  //   remove alert
  setTimeout(() => {
    alert.textContent = '';
    alert.classList.remove(`alert-${action}`);
  }, 1500);
}
// ****** LOCAL STORAGE **********
function addToLocalStorage(id, value) {
  console.log('cu-cu');
}
function removeFromLocalStorage(id) {
  console.log('remove from local storage', id);
}
function editLocalStorage(editID, value) {
  console.log('edit local storage');
}
// set back to dafault
function setBackToDafault() {
  grocery.value = '';
  editFlag = false;
  editID = '';
  submitBtn.textContent = 'submit';
}
// ****** SETUP ITEMS **********
