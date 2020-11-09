import React, { useContext, useReducer } from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route } from 'react-router-dom';



const rootElement = document.getElementById('root');

function render() {
  ReactDOM.render(
      <BrowserRouter>
          <App />
        
     </BrowserRouter>
     ,
     rootElement
  );
}

if (module.hot) {
  module.hot.accept('./App.js', function () {
    setTimeout(render);
  });
}

render();

serviceWorker.unregister();