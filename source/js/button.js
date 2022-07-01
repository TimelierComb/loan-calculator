const sendButtonElement = document.querySelector('.calculator__button');
const formElement = document.querySelector('.calculator__form');
const bodyElement = document.querySelector('body');
const modalElement = document.querySelector('.modal');
const closeButtonElement = document.querySelector('.modal__button');

formElement.addEventListener('submit', (evt) => {
  evt.preventDefault();
  openPopup();
})

function onEscapeKeydown (evt) {
  if (evt.key === 'Escape') {
    closePopup ();
  }
}

function closePopup () {
  bodyElement.classList.remove('modal-open');
  modalElement.classList.remove('modal--open');

  closeButtonElement.removeEventListener('click', closePopup);
  document.removeEventListener('keydown', onEscapeKeydown);
}

function openPopup () {
  bodyElement.classList.add('modal-open');
  modalElement.classList.add('modal--open');

  closeButtonElement.addEventListener('click', closePopup);
  document.addEventListener('keydown', onEscapeKeydown);
}
