const editButton = document.querySelector(".profile__button-edit");
const editPopup = document.querySelector(".popup");
const profileName = document.querySelector(".profile__title");
const job = document.querySelector(".profile__subtitle");
const popupForm = document.querySelector(".popup__form");
const inputName = popupForm.querySelector("input[name='name']");
const inputJob = popupForm.querySelector("input[name='job']")
const closeButton = document.querySelector(".popup__button-close");


/*Функция открытия попапа*/
function showPopup(){
  editPopup.classList.add("popup_opened");
  inputName.value = profileName.textContent;
  inputJob.value = job.textContent;
}

/*Функция закрытия попапа*/
function closePopup(){
  editPopup.classList.remove("popup_opened");
}

/*Сохранение данных их попапа в профиль*/
function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  job.textContent = inputJob.value;
  closePopup();
}

editButton.addEventListener('click', showPopup);
closeButton.addEventListener('click', closePopup);
popupForm.addEventListener('submit', formSubmitHandler);



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
const Elements = document.querySelector('.elements');
const templateElement = document.getElementById('elementTemplate');

function initElements (elm) {
  const newElement = templateElement.content.firstElementChild.cloneNode(true);
  newElement.querySelector('.element__caption').innerText = elm.name;
  newElement.querySelector('.element__image').alt = elm.name;
  newElement.querySelector('.element__image').src = elm.link;
  newElement.querySelector('.element__button-like').addEventListener('click', toggleLike);
  newElement.querySelector('.element__button-delete').addEventListener('click', removeElem);
  newElement.querySelector('.element__image').addEventListener("click", openGallery);
  Elements.prepend(newElement);

}

//вызов первичной инцииализации карточек

initialElements.forEach(initElements);

/*Функция открытия и закрытия попапа добавления карточки*/

const addButton = document.querySelector(".profile__button-add");
const popupAdd = document.querySelector("#popup_addcard");
const closeButtonAdd = document.querySelector("#closeButtonAdd");

function showPopupAdd(){
  popupAdd.classList.add("popup_opened");
}

addButton.addEventListener('click', showPopupAdd);

function closePopupAdd(){
  popupAdd.classList.remove("popup_opened");
}

closeButtonAdd.addEventListener('click', closePopupAdd);


/*функция создания нового элемента*/

const formElementAdd = document.getElementById('popupFormAdd');
const placeName = document.querySelector('#place-name');
const placeImg = document.querySelector('#place-image');

formElementAdd.addEventListener('submit', (elm) => {
  elm.preventDefault();
  let newElement = [];
  newElement.name=placeName.value;
  newElement.link=placeImg.value;
  initElements(newElement);
  placeName.value = '';
  placeImg.value = '';

  closePopupAdd()

});

/*функция лайка*/

function toggleLike(event) {
  event.preventDefault();
  const likeBtn = event.target.closest('.element__button-like');
  likeBtn.classList.toggle('element__button-like_active');
};

/*удаление элемента*/

function removeElem(elm) {
  elm.target.closest('.element').remove();
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
  galleryPopup.classList.add("popup_opened");
  closeButtonGallery.addEventListener('click', function(){
  galleryPopup.classList.remove("popup_opened");
  });
}
