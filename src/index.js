import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';

// Fonts import
import './fonts/oswald/Oswald-Regular.ttf';
import './fonts/oswald/Oswald-Light.ttf';
import './fonts/roboto-condensed/RobotoCondensed-Light.ttf';
import './fonts/roboto-condensed/RobotoCondensed-Regular.ttf';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
