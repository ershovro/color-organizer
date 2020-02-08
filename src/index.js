import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App';
import storeFactory from './store'

const store = storeFactory()

ReactDom.render(
   <Provider store={store}>
       <App />
   </Provider>,
   document.getElementById('root')
);