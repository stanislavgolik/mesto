const editButton = document.querySelector('.profile__button-edit');
const popupFormProfileEdit = document.querySelector(".popup__form_profileEdit");
const inputName = popupFormProfileEdit.querySelector("input[name='name']");
const inputJob = popupFormProfileEdit.querySelector("input[name='job']")
const addButton = document.querySelector(".profile__button-add");
const formElementAdd = document.getElementById('popupFormAdd');
const placeName = document.querySelector('#place-name');
const placeImg = document.querySelector('#place-image');
const elements = document.querySelector('.elements');
const closeButtonGallery = document.querySelector('#closeButtonGallery');

//Массив с данными карточек
const initialElements = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

//Объект валидации
const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-save',
  inactiveButtonClass: 'popup__button-save_deactivated',
  inputErrorClass: 'popup__input_error',
  errorClass: 'popup__message-error_activated'
 };

export { editButton, popupFormProfileEdit, inputName,
  inputJob, addButton, formElementAdd, placeName, placeImg,
  elements, closeButtonGallery, config, initialElements}
