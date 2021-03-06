import React from 'react';
import PropTypes from 'prop-types'
import Star from './Star'
import '../../stylesheets/StarRating.scss'


const StarRating = ({starsSelected = 0, totalStars = 5, onRate = f => f}) => (
   <div className="starRating">
      <div className="starRating__list">
         {[...Array(totalStars)].map( (_, i) => 
            <Star 
               key={i}
               className="starRating__star_margin"
               selected={i < starsSelected}
               onClick={ () => onRate(i + 1) }
            />
         )}
      </div>
      <p className="starRating__info">{starsSelected} of {totalStars} stars</p>
   </div>
)

StarRating.propTypes = {
   starsSelected: PropTypes.number,
   totalStars: PropTypes.number,
   onRate: PropTypes.func
}

export default StarRating;