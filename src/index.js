import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
// import reportWebVitals from './reportWebVitals';
// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
// import { persistor, store } from './redux/store';
import ContextProviderApp from './context/app/app-context-provider';
import App from './App';

ReactDOM.render(
    <BrowserRouter>
        <ContextProviderApp>
          <App />
        </ContextProviderApp>
    </BrowserRouter>,
  document.getElementById('root')
);
