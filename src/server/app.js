import App from '../components/App';
import storeFactory from '../store';
import initialState from '../../data/initialState.json';

import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import React from 'react';
import fs from 'fs';
import { compose } from 'redux';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';


const staticCSS = fs.readFileSync( path.join(__dirname, '../../dist/assets/bundle.css') );
const serverStore = storeFactory(true, initialState);
const fileAssets = express.static(path.join(__dirname, '/../../dist/assets'));

const logger = (req, res, next) => {
   console.log(`${req.method} request for '${req.url}'`);
   next();
};

const addStoreToRequestPipeline = (req, res, next) => {
   req.store = serverStore;
   next();
};

const buildHTMLPage = ({html, state}) => {console.log('building HTMLPage'); return (`
   <!DOCTYPE html>
   <html>
       <head>
           <meta name="viewport" content="minimum-scale=1.0, width=device-width, maximum-scale=1.0, user-scalable=no" />
           <meta charset="utf-8">
           <title>Universal Color Organizer</title>
           <style>${staticCSS}</style>
       </head>
       <body>
           <div id="root">${html}</div>
           <script>
               window.__INITIAL_STATE__ = ${JSON.stringify(state)}
           </script>
           <script src="/bundle.js"></script>
       </body>
   </html>
`)};

const renderComponentsToHTML = ({url, store}) => (
   {
      state: store.getState(),
      html: renderToString(
         <Provider store={store}>
            <StaticRouter location={url} context={{}}>
               <App/>
            </StaticRouter>
         </Provider>
      )
   }
);


const makeClientStoreFrom = store => url => (
   {
      url,
      store: storeFactory(false, store.getState())
   }
);

const htmlResponse = compose(
   buildHTMLPage,
   renderComponentsToHTML,
   makeClientStoreFrom(serverStore)
);

const respond = ({url}, res) => {
   res.status(200).send( htmlResponse(url) );
};

serverStore.subscribe( () => {
   fs.writeFile(
      path.join(__dirname, '../../data/initialState.json'),
      JSON.stringify( serverStore.getState() ),
      (error) => error ? console.log('Error saving state!', error) : null
   );
} );

export default express()
   .use(bodyParser.json())
   .use(logger)
   .use(fileAssets)
   .use(addStoreToRequestPipeline)
   .use(respond);