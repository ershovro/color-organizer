import React from 'react';
import enzyme from 'enzyme';
import ColorList from "../../../src/components/ui/ColorList";
import { JSDOM } from 'jsdom';
import toJSON from 'enzyme-to-json'
import { compose } from 'redux';
import Adapter from 'enzyme-adapter-react-16';


const { window } = new JSDOM(`...`);
const { document } = (new JSDOM(`...`)).window;

enzyme.configure({ adapter: new Adapter() });
global.window = window;
global.document = document;

jest.mock('../../../src/components/ui/Color.js', () =>
   ({rating, onRate = f => f, onRemove = f => f}) => (
      <div className="mock-color">
         <button className="rate" onClick={() => onRate(rating)}/>
         <button className="remove" onClick={onRemove}/>
      </div>
   )
);

describe('<ColorList /> ui component', () => {

   describe('Rendering ui', () => {

      it("Renders Correctly", () =>
         compose(expect, toJSON, enzyme.shallow)(
            <ColorList colors={_testColors} />
         ).toMatchSnapshot()
      );

      it('Renders a div with the class .colorList', () => {
         expect(
            enzyme.mount( <ColorList /> ).
            find('div.colorList').
            length
         ).toBe(1);
      });

      it('Renders default', () => {
         expect(
            enzyme.mount( <ColorList /> ).
            find('p').
            first().
            text()
         ).toBe('No Colors Listed. (Add a Color)');
      });

      it('Renders a correct number of colors', () => {
         expect(
            enzyme.mount( <ColorList colors={_testColors}/> ).
            find('div.mock-color').
            length
         ).toBe(3);
      });

      it('Clicking default rate button do not cause error', () => {
         enzyme.mount( <ColorList colors={_testColors}/> ).
         find('button.rate').
         first().
         simulate('click')
      });

      it('Clicking default remove button do not cause error', () => {
         enzyme.mount( <ColorList colors={_testColors}/> ).
         find('button.remove').
         first().
         simulate('click')
      });
   });

   describe('Rating a color', () => {
      let _rate = jest.fn();

      beforeEach( () => {
          enzyme.mount( <ColorList colors={_testColors} onRate={_rate}/> ).
          find('button.rate').
          first().
          simulate('click');
      } );

      it('Invokes onRate handler', () => {
         expect(_rate).toBeCalled();
      });

      it('Rate correct color', () => {
         expect(_rate).toBeCalledWith(
            '8658c1d0-9eda-4a90-95e1-8001e8eb6036',
            4
         )
      });

   });

   describe('Removing a color', () => {
      let _remove = jest.fn();

      beforeEach( () => {
         enzyme.mount( <ColorList colors={_testColors} onRemove={_remove}/> ).
         find('button.remove').
         first().
         simulate('click');
      } );

      it('Invokes onRemove handler', () => {
         expect(_remove).toBeCalled();
      });

      it('Remove correct color', () => {
         expect(_remove).toBeCalledWith(
            '8658c1d0-9eda-4a90-95e1-8001e8eb6036'
         )
      });

   });
});