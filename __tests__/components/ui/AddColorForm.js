import React from 'react';
import enzyme from 'enzyme';
import AddColorForm from "../../../src/components/ui/AddColorForm";
import { JSDOM } from 'jsdom';
import toJSON from 'enzyme-to-json'
import { compose } from 'redux';
import Adapter from 'enzyme-adapter-react-16';


const { window } = new JSDOM(`...`);
const { document } = (new JSDOM(`...`)).window;

enzyme.configure({ adapter: new Adapter() });
global.window = window;
global.document = document;


describe('<CAddColorForm /> ui component', () => {

   describe('Rendering ui', () => {

      it('Renders correctly', () => {
         compose(expect, toJSON, enzyme.shallow)( <AddColorForm /> ).
         toMatchSnapshot()
      });

      it('Renders a form with class .colorForm', () => {
         expect(
            enzyme.mount( <AddColorForm /> ).
            find('form.colorForm').
            length
         ).toBe(1);
      });

      it('Submiting default onNewColor does not cause error', () => {
         let _oneNewColor = jest.fn();
         let wrapper = enzyme.mount( <AddColorForm oneNewColor={_oneNewColor}/> );

         wrapper.find('input.colorForm__textInput').first().value = 'Best color';
         wrapper.find('input.colorForm__colorInput').first().value = "F0F0F0";
         wrapper.find('form.colorForm').simulate('submit');
      });

   });

   describe('Adding a new color', () => {
      let _oneNewColor = jest.fn();
      let wrapper;

      afterEach(() => {
         _oneNewColor.mockReset();
      });
      beforeEach(() => {
         wrapper = enzyme.mount( <AddColorForm oneNewColor={_oneNewColor}/> );
         wrapper.find('input.colorForm__textInput').instance().value = 'Best color';
         wrapper.find('input.colorForm__colorInput').instance().value = "#f0f0f0";
         wrapper.find('form.colorForm').simulate('submit');
      });

      it('Invoke onSubmit handler', () => {
         expect(_oneNewColor).toBeCalled();
      });

      it('Invoke onSubmit handler with correct arguments', () => {
         expect(_oneNewColor).toBeCalledWith('Best color', "#f0f0f0");
      });

      it('Reset the title value', () => {
         expect( wrapper.find('input.colorForm__textInput').instance().value ).
         toBe('')
      });

      it('Reset the color value', () => {
         expect(  wrapper.find('input.colorForm__colorInput').instance().value ).
         toBe('#000000')
      });
   });

});