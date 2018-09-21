import { PolymerElement, html } from '@polymer/polymer/polymer-element';

class MyView404 extends PolymerElement {
  static get template () {
    return html`
      <h1>Страница не найдена</h1>
      <p>
        <a href="[[rootPath]]">Вернуться на главную</a>
      </p>
    `;
  };
};

window.customElements.define('my-view-404', MyView404);
