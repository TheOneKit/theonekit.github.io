(function() {

  const {origin} = location;

  const template = (url) => `\x3Cscript type="text/javascript" src="${origin}/${url}">\x3C/script>`;

  window.React || document.write(template("3rdparty/react@16.13.1/react.development.js"));
  window.ReactDOM || document.write(template("3rdparty/react-dom@16.13.1/react-dom.development.js"));
  window.pathToRegexp || document.write(template("3rdparty/path-to-regexp@6.1.0/index.js"));
  window.useDebounce || document.write(template("3rdparty/use-debounce@5.0.1/use-debounce.min.js"));
  window.classNames || document.write(template("3rdparty/classnames@2.2.6/classnames.js"));
  window.ReactRedux || document.write(template("3rdparty/react-redux@7.2.0/react-redux.min.js"));
  window.Redux || document.write(template("3rdparty/redux@v4.0.5/redux.min.js"));
  window.Babel || document.write(template("3rdparty/@babel/standalone@7.12.4/babel.min.js"));
  window.moment || document.write(template("3rdparty/moment@2.29.1/moment.min.js"));

  window.material || document.write(template("3rdparty/material-ui-umd@1.1/material-ui.min.js"));
  window.form || document.write(template("3rdparty/material-ui-umd@1.1/form-tools.js"));
  window.router || document.write(template("3rdparty/material-ui-umd@1.1/router-tools.js"));
  window.other || document.write(template("3rdparty/material-ui-umd@1.1/other-tools.js"));
  window.pickers || document.write(template("3rdparty/material-ui-umd@1.1/pickers-tools.js"));
  window.idb || document.write(template("3rdparty/material-ui-umd@1.1/idb-tools.js"));
  window.chart || document.write(template("3rdparty/material-ui-umd@1.1/chart-tools.js"));

})();
