import React from 'react';
import {NavLink} from "react-router-dom";
import '../../stylesheets/menu.scss';

const selectedStyle = {
   color: 'red'
};

const Menu = ({className, sort}) => (
   <div className={`menu ${className}`}>
      <NavLink
         to="/"
         style={sort === '/' ? selectedStyle : {}}
         className="menu__link">
         date
      </NavLink>
      <NavLink
         to="/sort/title"
         activeStyle={selectedStyle}
         className="menu__link">
         title
      </NavLink>
      <NavLink
         to="/sort/rating"
         activeStyle={selectedStyle}
         className="menu__link">
         rating
      </NavLink>
   </div>
);


export default Menu;