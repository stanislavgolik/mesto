export class Section {
  constructor ({items, renderer}, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._containerSelector = containerSelector;
  };

  //Инициализация элементов на странице
  initialElements() {
    this._items.forEach(item => {
      this._renderer(item);
    });
  }

  //Принимает DOM-элемент и добавляет его в контейнер
  addItem(element) {
    this._containerSelector.prepend(element);
  }
}
