import {Popup} from './Popup.js';
export class PopupWithForm extends Popup {
  constructor(popupSelector, submitForm) {
    super(popupSelector);
    this._popupForm = this._popup.querySelector('.popup__form');
    this._inputList = this._popupForm.querySelectorAll('.popup__input');
    this._submitForm = submitForm;
  };

  // Данные полей ввода
  _getInputValues() {
    this._inputValues = {};
    this._inputList.forEach(input => {
      this._inputValues[input.name] = input.value;
    });
    return this._inputValues;
  }

  //Добавляем обработчик сабмита формы
  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitForm();
    })
    super.setEventListeners();
  }

  //Закрываем попап, очищаем поля
  close() {
    super.close();
    this._popupForm.reset();
  }
}
