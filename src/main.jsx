import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import './index.css';
import App from './App.jsx';
import { Provider } from 'react-redux';
import store from './assets/redux/store.jsx';
import 'modern-normalize/modern-normalize.css';

// console.log(store);
// console.log(store.getState());

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
