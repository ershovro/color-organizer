import React from 'react';
import PropTypes from 'prop-types'
import '../../stylesheets/Star.scss'

const Star = ({selected = false, onClick = f => f, className = ''}) => (
   <div
      className={`star ${selected ? 'star_selected' : ''} ${className}`}
      onClick={onClick}>
   </div>
   
)

Star.propTypes = {
   selected: PropTypes.bool,
   onClick: PropTypes.func,
   className: PropTypes.string
}

export default Star;