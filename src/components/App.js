import React from 'react';
import { NewColor, Colors, Color } from './containers'
import Menu from './ui/Menu';
import {Switch, Route} from 'react-router-dom';
import '../stylesheets/app.scss';
import Whoops404 from "./ui/Whoops404";

const App = () => (
   <Switch>
      <Route exact path="/:id" component={Color}/>
      <Route path="/" component={ (routeProps) =>
         <div className="app">
            <Menu {...routeProps} className="app__menu"/>
            <NewColor />
            <Switch>
               <Route exact path="/" component={Colors}/>
               <Route path="/sort/:sort" component={Colors}/>
               <Route component={Whoops404} />
            </Switch>
         </div>
      }/>
   </Switch>
);

export default App