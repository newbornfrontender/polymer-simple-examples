import { PolymerElement, html } from '@polymer/polymer/polymer-element';

class MyViewAbout extends PolymerElement {
  static get template () {
    return html`
      <h1>About</h1>
    `;
  };
};

window.customElements.define('my-view-about', MyViewAbout);
