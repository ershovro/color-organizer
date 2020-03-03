import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import StarRating from './StarRating'
import TimeAgo from './TimeAgo'
import {FaTrash} from 'react-icons/fa'
import '../../stylesheets/Color.scss'

class Color extends React.Component {

   render() {
      const { id, title, color, rating, timeStamp, onRemove, onRate, history } = this.props;

      return (
          <section className="color" style={this.style}>
             <h1
                ref="title"
                className="color__title"
                onClick={() => history.push(`/${id}`)}>
                {title}
             </h1>
             <button 
                className="color__removeButton"
                onClick={onRemove}>
                <FaTrash/>
             </button>
             <div className="color__timestamp">
                <TimeAgo timeStamp={timeStamp}/>
             </div>
             <div
                className="color__canvas"
                onClick={() => history.push(`/${id}`)}
                style={{ backgroundColor: color }}>
             </div>
             <div className="color__starRating">
                 <StarRating starsSelected={rating} onRate={onRate}/>
             </div>
          </section>
      );
   }

}

Color.propTypes = {
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    rating: PropTypes.number,
    onRemove: PropTypes.func,
    onRate: PropTypes.func
}

Color.defaultProps = {
    rating: 0,
    onRemove: f => f,
    onRate: f => f
}

export default withRouter(Color);
