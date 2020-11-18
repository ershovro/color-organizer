import React from 'react';
import Color from "../../../src/components/ui/Color";
import enzyme from 'enzyme';
import { JSDOM } from 'jsdom';
import toJSON from 'enzyme-to-json'
import { compose } from 'redux';
import Adapter from 'enzyme-adapter-react-16';


const { window } = new JSDOM(`...`);
const { document } = (new JSDOM(`...`)).window;

enzyme.configure({ adapter: new Adapter() });
global.window = window;
global.document = document;

describe('<Color /> ui component', () => {

   describe('Rendering ui', () => {

      it('Renders Correctly', () => {
         compose(expect, toJSON, enzyme.shallow)(
            <Color
               title="god color"
               color="#F0F0F0"
               rating={5}
               timeStamp="Mon Apr 11 2016 12:54:19 GMT-0700 (PDT)"
            />
         ).toMatchSnapshot();
      });

      it('Renders section with class .color', () => {
         expect(
            enzyme.mount( <Color title="god color" color="#F2F5F4"/> ).
            find('section.color').
            first().length
         ).toBe(1)
      });

      it('Clicking default remove button do not cause error', () => {
         enzyme.mount( <Color title="god color" color="#F2F5F4"/> ).
         find('button.color__removeButton').
         first().
         simulate('click')
      });

      it('Clicking default rate button do not cause error', () => {
         enzyme.mount( <Color title="god color" color="#F2F5F4"/> ).
         find('div.star').
         first().
         simulate('click')
      });
   });

   describe('Removing color', () => {
      let wrapper;
      let _remove = jest.fn();

      beforeEach(() => {
         wrapper = enzyme.mount( <Color onRemove={_remove} title="god color" color="#F2F5F4"/> );
      });
      afterEach(() => {
         _remove.mockReset();
      });

      it('invoke onRemove handler', () => {
         wrapper.
         find('button.color__removeButton').
         first().
         simulate('click');

         expect(_remove).toBeCalled();
      });
   });

   describe('Rating color', () => {
      let wrapper;
      let _rate = jest.fn();

      beforeEach(() => {
         wrapper = enzyme.mount( <Color onRate={_rate} title="god color" color="#F2F5F4"/> );
      });
      afterEach(() => {
         _rate.mockReset();
      });

      it('invoke onRate handler', () => {
         wrapper.
         find('div.star').
         first().
         simulate('click');

         expect(_rate).toBeCalled();
      });

      it('invoke onRate handler with correct arguments', () => {
         wrapper.
         find('div.star').
         first().
         simulate('click');

         expect(_rate).toBeCalledWith(1);
      });
   });
});

