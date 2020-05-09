import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
//import registerServiceWorker from './registerServiceWorker';
//const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');

ReactDOM.render(
  //<React.StrictMode>
    <BrowserRouter>
    <App/>
    </BrowserRouter>,
  //</React.StrictMode>
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
//registerServiceWorker();
