import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import './index.css';
import App from './App.jsx';
import { Provider } from 'react-redux';
import store from './assets/redux/store.jsx';
import { PersistGate } from 'redux-persist/integration/react';
import 'modern-normalize/modern-normalize.css';
// import authContext from './assets/context/authContext.jsx';

// console.log(store);
// console.log(store.getState());

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store.store}>
      <PersistGate loading={null} persistor={store.persistor}>
        {/* <authContext.Provider value={{ a: 1 }}> */}
        <BrowserRouter>
          <App />
        </BrowserRouter>
        {/* </authContext.Provider> */}
      </PersistGate>
    </Provider>
  </StrictMode>
);
