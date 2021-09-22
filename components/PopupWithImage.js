import {Popup} from './Popup.js';

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  showPopup(link, title) {
    this._popupImage = this._popup.querySelector('.popup__image');
    this._popupTitle = this._popup.querySelector('.popup__subtitle');
    this._popupImage.setAttribute('src', link);
    this._popupImage.setAttribute('alt', title);
    this._popupTitle.textContent = title;

    super.showPopup();
}

}
