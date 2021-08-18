const editButton = document.querySelector(".profile__button-edit");
const editPopup = document.getElementById("popup_editprofile");
const profileName = document.querySelector(".profile__title");
const job = document.querySelector(".profile__subtitle");
const popupFormProfileEdit = document.querySelector(".popup__form_profileEdit");
const inputName = popupFormProfileEdit.querySelector("input[name='name']");
const inputJob = popupFormProfileEdit.querySelector("input[name='job']")
const closeButtonFromProfilePopup = document.querySelector(".popup__button-close_edit");


/*Функция открытия попапа*/
function showPopup(popup){
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
  //inputName.value = profileName.textContent; убираю дублирующие строки, они есть в функции открытия попапа
  //inputJob.value = job.textContent;
  closePopup(editPopup);
}

//функция открытия попапа редактирования профиля и добавления в него значения
function showEditPopup() {
  showPopup(editPopup);
  inputName.value = profileName.textContent;
  inputJob.value = job.textContent;
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
const templateElement = document.getElementById('elementTemplate');

//функция создания карточки
function createCard(elm) {
  const newElement = templateElement.content.firstElementChild.cloneNode(true);
  newElement.querySelector('.element__caption').innerText = elm.name;
  newElement.querySelector('.element__image').alt = elm.name;
  newElement.querySelector('.element__image').src = elm.link;
  newElement.querySelector('.element__button-like').addEventListener('click', toggleLike);
  newElement.querySelector('.element__button-delete').addEventListener('click', removeElem);
  newElement.querySelector('.element__image').addEventListener("click", openGallery);
  return newElement;
}
//функция добавления карточки
function addCard(elm) {
  const newElement = createCard(elm);
  elements.prepend(newElement);
}

//вызов первичной инцииализации карточек

initialElements.forEach(addCard);

/*открытие и закрытие попапа добавления карточки*/

const addButton = document.querySelector(".profile__button-add");
const popupAdd = document.querySelector("#popup_addcard");
const closeButtonAdd = document.querySelector("#closeButtonAdd");


addButton.addEventListener('click', function() { showPopup(popupAdd)});
closeButtonAdd.addEventListener('click', function() { closePopup(popupAdd)});


/*функция создания нового элемента*/

const formElementAdd = document.getElementById('popupFormAdd');
const placeName = document.querySelector('#place-name');
const placeImg = document.querySelector('#place-image');

formElementAdd.addEventListener('submit', (event) => {
  event.preventDefault();
  const newElement = {};
  newElement.name=placeName.value;
  newElement.link=placeImg.value;
  addCard(newElement);
  placeName.value = '';
  placeImg.value = '';
  formElementAdd.reset(); //деактивирую кнопку сабмита
  closePopup(popupAdd);
});

/*функция лайка*/

function toggleLike(event) {
  event.preventDefault();
  const likeBtn = event.target.closest('.element__button-like');
  likeBtn.classList.toggle('element__button-like_active');
};

/*удаление элемента*/

function removeElem(event) {
  event.target.closest('.element').remove();
}

/*Функция открытия и закрытия картинки*/


const galleryPopup = document.getElementById("popup_opengalery");
const galleryImg = document.querySelector(".popup__image");
const galleryCapture = document.querySelector(".popup__subtitle");
const closeButtonGallery = document.querySelector("#closeButtonGallery");

function openGallery(evt) {
  const newSrc = evt.target.getAttribute("src");
  const newAlt = evt.target.getAttribute("alt");
  galleryImg.setAttribute("src", newSrc);
  galleryImg.setAttribute("alt", newAlt);
  galleryCapture.textContent = newAlt;
  showPopup(galleryPopup);
}

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
