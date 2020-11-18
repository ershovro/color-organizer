import { colors } from '../../../src/store/reducers';
import c from '../../../src/constants';

describe('Colors reducer', () => {

   it('ADD_COLOR success', () => {
      const state = [
         {
            id: 0,
            title: 'Test Tale1',
            color: '#90C3D4',
            rating: 5,
            timeStamp: new Date().toString()},
         {
            id: 1,
            title: 'Test Tale2',
            color: '#bfd42f',
            rating: 4,
            timeStamp: new Date().toString()
         }
      ];
      const action = {
         type: c.ADD_COLOR,
         id: 2,
         title: 'Test Tale3',
         color: '#4c37d4',
         timeStamp: new Date().toString()
      };

      expect( colors(state, action) )
         .toEqual([...state, {
            id: action.id,
            title: action.title,
            color: action.color,
            rating: 0,
            timeStamp: action.timeStamp
         }] )
   });

   it('RATE_COLOR success', () => {
      const state = [
         {
            id: 0,
            title: 'Test Tale1',
            color: '#90C3D4',
            rating: 5,
            timeStamp: new Date().toString()},
         {
            id: 1,
            title: 'Test Tale2',
            color: '#bfd42f',
            rating: 4,
            timeStamp: new Date().toString()
         }
      ];
      const action = {
         type: c.RATE_COLOR,
         id: 1,
         rating: 5
      };

      expect( colors(state, action) )
         .toEqual(state.map( (color) => {
            if (color.id === action.id) {
               return {
                  ...color,
                  rating: action.rating
               }
            }

            return color;
         }))
   });

   it('REMOVE_COLOR success', () => {
      const state = [
         {
            id: 0,
            title: 'Test Tale1',
            color: '#90C3D4',
            rating: 5,
            timeStamp: new Date().toString()},
         {
            id: 1,
            title: 'Test Tale2',
            color: '#bfd42f',
            rating: 4,
            timeStamp: new Date().toString()
         }
      ];
      const action = {
         type: c.REMOVE_COLOR,
         id: 1
      };

      expect( colors(state, action) )
         .toEqual( state.filter( color => color.id !== action.id ) )
   });
});