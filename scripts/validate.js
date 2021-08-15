/*Функция, которая добавляет класс с ошибкой*/
function showInputError(formElement, inputElement, errorMessage, objects) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(objects.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(objects.errorClass);
};

/*Функция, которая удаляет класс с ошибкой*/
function hideInputError(formElement, inputElement, objects) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(objects.inputErrorClass);
  errorElement.classList.remove(objects.errorClass);
  errorElement.textContent = '';
};

/*Функция, которая проверяет валидность поля*/
function checkInputValidity(formElement, inputElement, objects) {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, objects);
  } else {
    hideInputError(formElement, inputElement, objects);
  }
};

/*Добавление обработчиков всем полям формы*/
function setEventListeners(formElement, objects) {
  const inputList = Array.from(formElement.querySelectorAll(objects.inputSelector));
  const buttonElement = formElement.querySelector(objects.submitButtonSelector);

  toggleButtonState(inputList, buttonElement, objects);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, objects);
      toggleButtonState(inputList, buttonElement, objects);
    });
  });

  formElement.addEventListener('reset', () => {
    toggleButtonState(inputList, buttonElement, objects);
  })
};

/*найдем все формы и запустим для них валидацию*/
const enableValidation = (objects) => {
  const formList = Array.from(document.querySelectorAll(objects.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    setEventListeners(formElement, objects);
  });
};


/*Функция проверки наличия невалидного поля*/
function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
};

/*Функция которая изменяет состояние кнопки(активна или не активна)*/
function toggleButtonState(inputList, buttonElement, objects) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(objects.inactiveButtonClass);
    buttonElement.setAttribute('disabled', true);
  } else {
    buttonElement.classList.remove(objects.inactiveButtonClass);
    buttonElement.removeAttribute('disabled');
  }
};

/*Объект элементов, запускаем валидацию*/
enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-save',
  inactiveButtonClass: 'popup__button-save_deactivated',
  inputErrorClass: 'popup__input_error',
  errorClass: 'popup__message-error_activated'
});
