export class UserInfo {
  constructor({nameSelector, infoSelector}) {
    this._name = document.querySelector(nameSelector);
    this._info = document.querySelector(infoSelector);;
  }

  //Получаем объект с данными пользователя
  getUserInfo() {
    return {
      name: this._name.textContent,
      info: this._info.textContent
    };
  }

  //Сохранение данных из попапа в профиль
  setUserInfo({ name, info }) {
    this._name.textContent = name;
    this._info.textContent = info;
  }
}
