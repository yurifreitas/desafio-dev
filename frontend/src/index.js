import React from 'react';
import ReactDOM from 'react-dom';
import Default from './components/themes/Default/Default';
import App from './components/pages/App';

ReactDOM.render(
  <React.StrictMode>
    <Default>
      <App />
    </Default>
  </React.StrictMode>,
  document.getElementById('root')
);