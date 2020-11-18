import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Star from "../../../src/components/ui/Star";
import React from 'react';

enzyme.configure({ adapter: new Adapter() });

describe('<Star /> ui components', () => {

   describe('Rendering the ui', () => {

      it('renders default star (div with the class .star)', () => {
         expect(
            enzyme.shallow( <Star/> ).find('div.star').length
         ).
         toBe(1);
      });

      it('renders selected star (div with the classes .star.star_selected)', () => {
         expect(
            enzyme.shallow( <Star selected={true}/> )
               .find('div.star.star_selected').length
         ).
         toBe(1);
      });

   });

   describe('click on a star', () => {

      it('invokes onClick', () => {
         const _click = jest.fn();

         enzyme.shallow( <Star onClick={_click}/> ).
         find('div.star').
         at(0).
         simulate('click');

         expect(_click).toBeCalled();
      });

   });
});

