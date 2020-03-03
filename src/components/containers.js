import { connect } from 'react-redux';
import ColorList from './ui/ColorList';
import ColorDetails from './ui/ColorDetails';
import AddColorForm from './ui/AddColorForm';
import { addColor, rateColor, removeColor } from '../actions';
import { findById } from '../utils/array-helpers';
import { sortColors } from '../utils/array-helpers';

export const NewColor = connect(
    null,
    dispatch =>
        ({
            oneNewColor(title, color) {
                dispatch(addColor(title, color))
            }
        })
)(AddColorForm);

export const Color = connect(
    ({ colors }, { match }) =>
        ({
            ...findById(colors, match.params.id)
        })
)(ColorDetails);

export const Colors = connect(
    ({colors}, {match}) =>
        ({
           colors: sortColors(colors, match.params.sort)
        }),
    dispatch =>
        ({
            onRemove(id) {
                dispatch(removeColor(id))
            },
            onRate(id, rating) {
                dispatch(rateColor(id, rating))
            }
        })
)(ColorList);
