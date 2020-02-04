import React from 'react';
import PropTypes from 'prop-types';
import '../../stylesheets/AddColorForm.scss';

const AddColorForm = ({ oneNewColor = f => f }) => {
   const onSubmitHandler = (event) => {
      event.preventDefault();
      oneNewColor(_textInput.value, _colorInput.value);
      _textInput.value = '';
      _colorInput.value = '#000000';
      _textInput.focus();
   }
   let _textInput, _colorInput;
   
   return (
      <form
         className="colorForm"
         onSubmit={onSubmitHandler}>
         
         <input
            ref={ textInput => _textInput = textInput }
            className="colorForm__textInput"
            type="text"
            placeholder="color title..."
            required
         />
         <input
            ref={ colorInput => _colorInput = colorInput }
            className="colorForm__colorInput"
            type="color"
         />
         <button className="colorForm__Button">
            Add
         </button>

      </form>
   )
}

AddColorForm.propTypes = {
   oneNewColor: PropTypes.func
}

export default AddColorForm