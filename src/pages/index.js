import './index.css';
import {Card} from '../components/Card.js';
import {FormValidator} from '../components/FormValidator.js';
import {PopupWithForm} from '../components/PopupWithForm.js';
import {PopupWithImage} from '../components//PopupWithImage.js';
import {Section} from '../components/Section.js';
import {UserInfo} from '../components/UserInfo.js';
import {
  editButton, popupFormProfileEdit, inputName,
  inputJob, addButton, formElementAdd, placeName, placeImg,
  elements, closeButtonGallery, config, initialElements} from '../utils/constants.js';


//Валидация форм

const formValidatorCard = new FormValidator(config, formElementAdd);
const formValidatorEdit = new FormValidator(config, popupFormProfileEdit);

formValidatorCard.enableValidation();
formValidatorEdit.enableValidation();


//Просмотр картинок
const popupShowImageCards = new PopupWithImage('#popup_opengalery');
popupShowImageCards.setEventListeners();


//Открытие попапа просмотра карточек
function handleCardClick (link, title) {
  popupShowImageCards.open(link, title);
};


//Обработчик закрытия попапа просмотра картинок и добавление информации
closeButtonGallery.addEventListener('click', () => popupShowImageCards.close('.popup_opengalery'));

//Данные профиля на странице
const infoProfile = new UserInfo({ nameSelector: '.profile__title', infoSelector: '.profile__subtitle'});


//Попап редактирование профиля
const popupWithProfile = new PopupWithForm('#popup_editprofile', editProfile);
popupWithProfile.setEventListeners();

//Открываем попап редактирование профиля
editButton.addEventListener('click', openedProfileInfo);

//Функция открытия попапа редактирование профиля
function openedProfileInfo () {
  const userProfile = infoProfile.getUserInfo();
  inputName.value = userProfile.name;
  inputJob.value = userProfile.info;
  popupWithProfile.open();
  formValidatorEdit.toggleButtonState();
  formValidatorEdit.hideInputSelectorError();
};

//Функция изменения информации в профиле
function editProfile () {
  infoProfile.setUserInfo({name: inputName.value, info: inputJob.value });
  popupWithProfile.close()
};

//Попап добавлениие карточек
const popupCardsAdd = new PopupWithForm('#popup_addcard', submitAddCardForm);
popupCardsAdd.setEventListeners();

//Функция открытие попапа добавления карточек
function openPopupAddCards () {
  popupCardsAdd.open();
  formValidatorCard.toggleButtonState();
  formValidatorCard.hideInputSelectorError();
};

//Слушатель открытие попапа добавление карточек
addButton.addEventListener('click', openPopupAddCards);


//Функция отрисовки карточки через форму
function submitAddCardForm() {
  const formItemLinks = placeImg.value;
  const formItemTitle = placeName.value;
  const element = {
  link: formItemLinks,
  name: formItemTitle}

  elements.prepend(createCards(element));
  popupCardsAdd.close()
};

//Функция создания карточек
const createCards = (item) => {
  const card = new Card(item, '.elementTemplate', handleCardClick);
  const cardElement = card.generateCard();
  return cardElement
};

// Добавляем карточки по дефолту
const defaultCardList = new Section ({
  items: initialElements,
  renderer: (item) => {
    const cards = createCards(item);
    defaultCardList.addItem(cards);
  }
},
elements
);

defaultCardList.initialElements();
