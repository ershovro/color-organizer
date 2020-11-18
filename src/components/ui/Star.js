import React from 'react';
import PropTypes from 'prop-types'
import '../../stylesheets/Star.scss'

const Star = ({selected = false, onClick = f => f, className = ''}) => {
   const _classList = `star ${selected ? 'star_selected' : ''} ${className}`;

   return (
      <div
         className={ _classList }
         onClick={ onClick }>
      </div>
   );

}

Star.propTypes = {
   selected: PropTypes.bool,
   onClick: PropTypes.func,
   className: PropTypes.string
}

export default Star;