import { color } from '../../../src/store/reducers';
import c from '../../../src/constants';
import deepFreeze from 'deep-freeze';

describe('color Reducer', () => {

   it('ADD_COLOR success', () => {
      const state = {};
      const action = {
         type: c.ADD_COLOR,
         id: 0,
         title: 'Test Tale',
         color: '#90C3D4',
         timeStamp: new Date().toString()
      };

      deepFreeze(state);
      deepFreeze(action);
      expect( color(state, action) )
         .toEqual({
            id: 0,
            title: action.title,
            timeStamp: action.timeStamp,
            color: action.color,
            rating: 0
         });
   });

   it('RATE_COLOR success', () => {
      const state = {
         id: 0,
         title: 'Test Tale',
         color: '#90C3D4',
         rating: 0,
         timeStamp: new Date().toString()
      };
      const action = {
         type: c.RATE_COLOR,
         id: 0,
         rating: 5
      };

      deepFreeze(state);
      deepFreeze(action);
      expect( color(state, action) )
         .toEqual({
            id: state.id,
            title: state.title,
            color: state.color,
            rating: action.rating,
            timeStamp: state.timeStamp
         })
   });
});