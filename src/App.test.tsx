import React from 'react';
import App from './App';
import RouterMain from "./Config/router";
import { shallow } from 'enzyme';
describe('App Component', () => {
  it('Should Render RouterMain Component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.containsMatchingElement(<RouterMain />)).toEqual(true);
  });
});