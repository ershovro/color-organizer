import React from 'react';
import App from './components/App';
import storeFactory from './store';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";

const store = storeFactory(false, window.__INITIAL_STATE__);

hydrate(
      <Provider store={store}>
         <BrowserRouter>
            <App />
         </BrowserRouter>
      </Provider>,
   document.getElementById('root')
);