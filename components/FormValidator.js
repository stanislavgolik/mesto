export class FormValidator {
  constructor(config, formElement) {
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._formElement = formElement;
  };

   //Функция, которая добавляет класс с ошибкой
  _showInputError (inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.classList.add(this._errorClass);
    errorElement.textContent = errorMessage;
  };

  //Функция, которая удаляет класс с ошибкой
  _hideInputError (inputElement) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
  };

  //Функция, которая проверяет валидность поля
  _checkInputValidity (inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  };

  //Убираем ошибки при открытии попапа
  hideInputSelectorError() {
    const inputList = this._formElement.querySelectorAll(this._inputSelector);
    inputList.forEach((inputElement) => {
      this._hideInputError (inputElement);
    });
  };

  //Функция которая изменяет состояние кнопки(активна или не активна)
  toggleButtonState() {
    const buttonElement = this._formElement.querySelector(this._submitButtonSelector);
    const formValid = this._formElement.checkValidity();

    if (!formValid) {
      buttonElement.classList.add(this._inactiveButtonClass);
      buttonElement.setAttribute('disabled', true);
    } else {
      buttonElement.classList.remove(this._inactiveButtonClass);
      buttonElement.removeAttribute('disabled');
    }
  };

  //Найдем все формы
  _setEventListeners() {
    const inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
      inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
          this._checkInputValidity (inputElement);
          this.toggleButtonState();
        });
      });
  };

  //Запуск валидации*/
  enableValidation() {
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      });
      this._setEventListeners();
  };
};
