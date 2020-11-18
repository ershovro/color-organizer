import React from 'react';
import enzyme from 'enzyme';
import Menu from "../../../src/components/ui/Menu";
import { JSDOM } from 'jsdom';
import toJSON from 'enzyme-to-json'
import { compose } from 'redux';
import Adapter from 'enzyme-adapter-react-16';


const { window } = new JSDOM(`...`);
const { document } = (new JSDOM(`...`)).window;

enzyme.configure({ adapter: new Adapter() });
global.window = window;
global.document = document;

describe('<Menu /> ui component', () => {

   describe('Rendering ui', () => {

      it('Renders correctly', () => {
         compose(expect, toJSON, enzyme.shallow)( <Menu sort="/" /> ).
         toMatchSnapshot();
      });

      it('Renders default a div with the class .menu', () => {
         expect(
            enzyme.shallow( <Menu /> ).
            find('div.menu').length
         ).toBe(1);
      });

      it('Renders default 3 menu-item - a with the class menu__link', () => {
         expect(
            enzyme.shallow( <Menu /> ).
            find('.menu__link').length
         ).toBe(3);
      });

   });

});