import storeFactory from "../../src/store";
import deepFreeze from 'deep-freeze';
import { addColor, removeColor, rateColor } from '../../src/actionCreators';

describe('store tests', () => {


   describe('add color action dispatch testing', () => {
      let store;
      let action;
      const initialState = {
         colors: [
            {
               id: 0,
               title: 'Test Tale1',
               color: '#90C3D4',
               rating: 5,
               timeStamp: new Date().toString()
            },
            {
               id: 1,
               title: 'Test Tale2',
               color: '#bfd42f',
               rating: 4,
               timeStamp: new Date().toString()
            }
         ]
      };
      beforeAll( () => {
         store = storeFactory(false, initialState);
         action = addColor('Test Tale3', '#90C3D4');
         store.dispatch(action);
         deepFreeze(action);
         deepFreeze(initialState);
      } );

      it('should add a new color', () => {
         expect(store.getState().colors.length).toBe(3);
      });

      it('should set rating to 0', () => {
         expect(store.getState().colors[2].rating).toBe(0);
      });

      it('should set timeStamp', () => {
         expect(store.getState().colors[2].timeStamp).toBeDefined();
      });

      it('should add a uniquie quid id', () => {
         expect(store.getState().colors[2].id.length).toBe(36);
      });
   });

   describe('rate color action dispatch testing', () => {
      let store;
      let action;
      const initialState = {
         colors: [
            {
               id: 0,
               title: 'Test Tale1',
               color: '#90C3D4',
               rating: 5,
               timeStamp: new Date().toString()
            },
            {
               id: 1,
               title: 'Test Tale2',
               color: '#bfd42f',
               rating: 4,
               timeStamp: new Date().toString()
            }
         ]
      };
      beforeAll( () => {
         store = storeFactory(false, initialState);
         action = rateColor(0, 5);
         store.dispatch(action);
         deepFreeze(action);
         deepFreeze(initialState);
      } );


      it(`color with id=0 should get rating=5`, () => {
         expect( store.getState().colors.filter( color => color.id === action.id)[0].rating )
            .toBe(action.rating);
      });
   });

   describe('remove color action dispatch testing', () => {
      let store;
      let action;
      const initialState = {
         colors: [
            {
               id: 0,
               title: 'Test Tale1',
               color: '#90C3D4',
               rating: 5,
               timeStamp: new Date().toString()
            },
            {
               id: 1,
               title: 'Test Tale2',
               color: '#bfd42f',
               rating: 4,
               timeStamp: new Date().toString()
            }
         ]
      };
      beforeAll( () => {
         store = storeFactory(false, initialState);
         action = removeColor(store.getState().colors[0].id);
         store.dispatch(action);
         deepFreeze(action);
         deepFreeze(initialState);
      } );


      it('should remove color', () => {
         expect(store.getState().colors.length).toBe(1);
      });
   });
});