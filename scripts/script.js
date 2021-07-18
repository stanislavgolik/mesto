let editButton = document.querySelector(".profile__button-edit");
let editPopup = document.querySelector(".popup");
let profileName = document.querySelector(".profile__title");
let job = document.querySelector(".profile__subtitle");
let popupForm = document.querySelector(".popup__form");
let inputName = popupForm.querySelector("input[name='name']");
let inputJob = popupForm.querySelector("input[name='job']")
let closeButton = document.querySelector(".popup__button-close");

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
