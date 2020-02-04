import React from 'react';
import PropTypes from 'prop-types';
import Color from './Color';
import '../../stylesheets/ColorList.scss';

const ColorList = ({ colors = [], onRate = f => f, onRemove = f => f }) => (
   <div className="colorList">
   {
      colors.length
         ? colors.map( color =>
            <Color 
               key={color.id}
               onRemove={ () => onRemove(color.id)} 
               onRate={ (rating) => onRate(color.id, rating)}
               {...color}
            />
         )
         : <p> No Colors Listed. (Add a Color) </p>
   }
   </div>
)

ColorList.propTypes = {
   colors: PropTypes.array,
   onRate: PropTypes.func,
   onRemove: PropTypes.func
};

export default ColorList