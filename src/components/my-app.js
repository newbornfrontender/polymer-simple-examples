import { PolymerElement, html } from '@polymer/polymer/polymer-element';
import { setPassiveTouchGestures, setRootPath } from '@polymer/polymer/lib/utils/settings';

import '@polymer/app-route/app-location';
import '@polymer/app-route/app-route';
import '@polymer/iron-pages/iron-pages';
import '@polymer/iron-selector/iron-selector';

setPassiveTouchGestures(true);
setRootPath(MyAppGlobals.rootPath);

class MyApp extends PolymerElement {
  static get template () {
    return html`
      <app-location
        route="{{route}}"
        url-space-regex="^[[rootPath]]">
      </app-location>

      <app-route
        route="{{route}}"
        pattern="[[rootPath]]:page"
        data="{{routeData}}"
        tail="{{subroute}}">
      </app-route>

      <iron-selector
        selected="[[page]]"
        attr-for-selected="name"
        role="navigation"
      >
        <a
          name="home"
          href="[[rootPath]]"
        >Home</a>
        <a
          name="about"
          href="[[rootPath]]about"
        >About</a>
      </iron-selector>

      <iron-pages selected="[[page]]" attr-for-selected="name" role="main">
        <my-view-home name="home"></my-view-home>
        <my-view-about name="about"></my-view-about>
        <my-view-404 name="404"></my-view-404>
      </iron-pages>
    `;
  };

  static get properties () {
    return {
      page: {
        type: String,
        reflectToAttribute: true,
        observer: '_pageChanged',
      },
      routeData: Object,
      subroute: Object,
    };
  };

  static get observers () {
    return [
      '_routePageChanged(routeData.page)',
    ];
  };

  _routePageChanged (page) {
    if (!page) {
      this.page = 'home';
    } else if (['about'].indexOf(page) !== -1) {
      this.page = page;
    } else {
      this.page = '404';
    };
  };

  _pageChanged (page) {
    switch (page) {
      case 'home':
        import('./views/my-view-home.js');
        break;
      case 'about':
        import('./views/my-view-about.js');
        break;
      case '404':
        import('./views/my-view-404.js');
        break;
    };
  };
};

window.customElements.define('my-app', MyApp);
