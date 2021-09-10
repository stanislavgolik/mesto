import {Card} from './Card.js';
import {FormValidator} from './FormValidator.js';

const editButton = document.querySelector(".profile__button-edit");
const editPopup = document.getElementById("popup_editprofile");
const profileName = document.querySelector(".profile__title");
const job = document.querySelector(".profile__subtitle");
const popupFormProfileEdit = document.querySelector(".popup__form_profileEdit");
const inputName = popupFormProfileEdit.querySelector("input[name='name']");
const inputJob = popupFormProfileEdit.querySelector("input[name='job']")
const closeButtonFromProfilePopup = document.querySelector(".popup__button-close_edit");


/*Функция открытия попапа*/
export function showPopup(popup){
  //formElementAdd.reset(); сброс сабмита перенес в функцию создания нового элемента строка 126
  popup.classList.add("popup_opened");
  document.addEventListener('keydown', handleEscPopup);
  popup.addEventListener("mousedown", handleClickOverlay);
}

/*Функция закрытия попапа*/
function closePopup(popup){
  popup.classList.remove("popup_opened");
  document.removeEventListener('keydown', handleEscPopup);
  popup.removeEventListener("mousedown", handleClickOverlay);
}

/*Сохранение данных из попапа в профиль*/
function handleProfileFormSubmit (evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  job.textContent = inputJob.value;
  closePopup(editPopup);
}

//функция открытия попапа редактирования профиля и добавления в него значения
function showEditPopup() {
  showPopup(editPopup);
  inputName.value = profileName.textContent;
  inputJob.value = job.textContent;
  formValidatorEdit.toggleButtonState();
  formValidatorEdit.hideInputSelectorError();
}

editButton.addEventListener('click', showEditPopup);
closeButtonFromProfilePopup.addEventListener('click', function() { closePopup(editPopup)});
popupFormProfileEdit.addEventListener('submit', handleProfileFormSubmit);



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


//функция инициализации элементов
const elements = document.querySelector('.elements');

//функция создания карточки
function createCard(element) {
  return (new Card(element, '.elementTemplate').generateCard());
  }

//функция добавления карточки
function addCard(elm) {
  const newElement = createCard(elm);
  elements.prepend(newElement);
}

//вызов первичной инцииализации карточ

initialElements.forEach(addCard);

/*открытие и закрытие попапа добавления карточки*/

const addButton = document.querySelector(".profile__button-add");
const popupAdd = document.querySelector("#popup_addcard");
const closeButtonAdd = document.querySelector("#closeButtonAdd");
const formElementAdd = document.getElementById('popupFormAdd');

addButton.addEventListener('click', function() { showPopup(popupAdd);formValidatorCard.toggleButtonState();});
closeButtonAdd.addEventListener('click', function() { closePopup(popupAdd)});


/*функция создания нового элемента*/

//const formElementAdd = document.getElementById('popupFormAdd');
const placeName = document.querySelector('#place-name');
const placeImg = document.querySelector('#place-image');

formElementAdd.addEventListener('submit', (event) => {
  event.preventDefault();
  const newElement = {};
  newElement.name=placeName.value;
  newElement.link=placeImg.value;
  addCard(newElement);
  formValidatorCard.hideInputSelectorError();
  formElementAdd.reset(); //деактивирую кнопку сабмита
  closePopup(popupAdd);
});

const galleryPopup = document.getElementById("popup_opengalery");
closeButtonGallery.addEventListener('click', function() { closePopup(galleryPopup)});

/*Функция закрытия попапа по кнопке Esc*/
function handleEscPopup(event) {
  if (event.key === 'Escape') {
    const popup = document.querySelector(".popup_opened");
    closePopup(popup);
  }
};

/*Функция закрытия попапа по клику на оверлей*/
function handleClickOverlay(evt) {
  if (evt.target.classList.contains('popup')) {
    closePopup(evt.target);
  }
};

const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-save',
  inactiveButtonClass: 'popup__button-save_deactivated',
  inputErrorClass: 'popup__input_error',
  errorClass: 'popup__message-error_activated'
 };

const formValidatorCard = new FormValidator(config, formElementAdd);
const formValidatorEdit = new FormValidator(config, popupFormProfileEdit);

formValidatorCard.enableValidation();
formValidatorEdit.enableValidation();
