export class Popup {
  constructor (popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this.handleEscPopup = this._handleEscPopup.bind(this);
  };

  //Открытие попапа
  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscPopup);
  }

  //Закрытие попапа
  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscPopup);
  }

  //Закрытие попапа по кнопке ESC
  _handleEscPopup(event) {
    if(event.key === 'Escape') {
      this.close();
    }
  }

  //Слушатель клика по кнопке закрытия
  setEventListeners() {
    this._popup.addEventListener('click', (evt) => {
      if (evt.target === this._popup || evt.target.classList.contains('popup__button-close')) {
    this.close();
  }
    });
  }
}
