import { PolymerElement, html } from '@polymer/polymer/polymer-element';

class MyViewHome extends PolymerElement {
  static get template () {
    return html`
      <h1>Home</h1>
    `;
  };
};

window.customElements.define('my-view-home', MyViewHome);
