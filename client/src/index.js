import React from 'react';
import ReactDOM from 'react-dom';
import AuthState from './components/context/Auth/AuthState';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <AuthState>
      <App />
    </AuthState>
  </React.StrictMode>,
  document.getElementById('root')
);

// If
