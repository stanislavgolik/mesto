let editButton = document.querySelector(".profile__button-edit");
let editPopup = document.querySelector(".popup");
let profileName = document.querySelector(".profile__title");
let job = document.querySelector(".profile__subtitle");
let popupForm = document.querySelector(".popup__form");
let inputName = popupForm.querySelector("input[name='name']");
let inputJob = popupForm.querySelector("input[name='job']")
let closeButton = document.querySelector(".popup__button-close");

function popupShow(){
  editPopup.classList.add("popup_opened");
  inputName.value = profileName.textContent;
  inputJob.value = job.textContent;
}

function popupClose(){
  editPopup.classList.remove("popup_opened");
}

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  job.textContent = inputJob.value;
  popupClose();
}

editButton.addEventListener('click', popupShow);
closeButton.addEventListener('click', popupClose);
popupForm.addEventListener('submit', formSubmitHandler);
