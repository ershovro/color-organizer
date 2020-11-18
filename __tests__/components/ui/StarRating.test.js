import React from 'react';
import StarRating from "../../../src/components/ui/StarRating";
import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { JSDOM } from 'jsdom';


const { window } = new JSDOM(`...`);
const { document } = (new JSDOM(`...`)).window;

enzyme.configure({ adapter: new Adapter() });
global.window = window;
global.document = document;

describe('<StarRating /> ui component', () => {

   describe('Rendering the ui', () => {
      let wrapper;

      beforeAll( () => {
         wrapper = enzyme.mount(
            <StarRating totalStars={5} starsSelected={3}/>
         );
      } );

      it('renders a div with the class .starRating', () => {
         expect( wrapper.find('div.starRating').length ).toBe(1);
      });

      it('renders a div with the class .starRating__list', () => {
         expect( wrapper.find('div.starRating__list').length ).toBe(1);
      });

      it('renders a p with the class .starRating__info', () => {
         expect( wrapper.find('p.starRating__info').length ).toBe(1);
      });

      it('displays {rating} of {total} stars', () => {
         expect( wrapper.find('p.starRating__info').text() ).toBe('3 of 5 stars');
      });

      it('renders the correct number of star', () => {
         expect( wrapper.find('.star').length ).toBe(5);
      });

      it('renders the correct number of selected star', () => {
         expect( wrapper.find('.star.star_selected').length ).toBe(3);
      });

      it('invoke event click does not cause errors', () => {
         wrapper.find('.star').first().simulate('click');
      });
   });

   describe('Changing the rating', () => {
      let _rate = jest.fn();
      let wrapper;

      afterEach(() => {
         _rate.mockReset();
      });
      beforeAll(() => {
         wrapper = enzyme.mount( <StarRating onRate={_rate}/> );
      });

      it('invode onRate handler', () => {
         wrapper.find('.star').at(0).simulate('click');
         expect(_rate.mock.calls.length).toBe(1);
      });

      it('invode onRate handler with correct arguments', () => {
         wrapper.find('.star').at(1).simulate('click');
         expect(_rate.mock.calls[0]).toEqual([2]);
      });
   });
});


