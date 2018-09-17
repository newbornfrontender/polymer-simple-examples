import { LitElement, html } from '@polymer/lit-element';

class MyApp extends LitElement {
  static get properties () {
    return {
      msg: String,
      theme: String,
    };
  };

  constructor () {
    super();

    this.msg = 'default';
    this.theme = 'green';
  };

  render () {
    return html`
      <style>
        span {
          color: ${this.theme};
        }
      </style>

      <slot name="top-elem"></slot>
      <h1>Component: <span>${this.msg}</span></h1>
      <slot></slot>
    `;
  };
};

customElements.define('my-app', MyApp);
