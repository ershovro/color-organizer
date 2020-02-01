import React from 'react'
import ReactDom from 'react-dom'
import Color from './components/ui/Color';

ReactDom.render(
   <Color starsSelected={5}/>,
   document.getElementById('root')
);