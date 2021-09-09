import {showPopup} from './index.js';
export class Card {
  constructor(name, link) {
    this._name = name;
    this._link = link;
  }

  _getTemplate() {
    const cardElem = document
        .getElementById('elementTemplate')
        .content
        .querySelector('.element')
        .cloneNode(true);

    return cardElem;
}

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._element.querySelector('.element__image').alt = this._name;
    this._element.querySelector('.element__image').src = this._link;
    this._element.querySelector('.element__caption').textContent = this._name;

    return this._element;
  }

_removeElem() {
  this._element.remove();
}

_toggleLike() {
  this._element.querySelector('.element__button-like').classList.toggle('element__button-like_active');
}

_openGallery(evt) {
  const galleryPopup = document.getElementById("popup_opengalery");
  const galleryImg = document.querySelector(".popup__image");
  galleryImg.src = this._link
  galleryImg.alt = this._name
  galleryPopup.querySelector('.popup__subtitle').textContent = this._name
  showPopup (galleryPopup);
}

  _setEventListeners() {

  this._element.querySelector('.element__button-delete').addEventListener('click', () => {
    this._removeElem();
      });

  this._element.querySelector('.element__button-like').addEventListener('click', () => {
    this._toggleLike();
      });

  this._element.querySelector('.element__image').addEventListener('click', () => {
    this._openGallery();
      });
  }
}
