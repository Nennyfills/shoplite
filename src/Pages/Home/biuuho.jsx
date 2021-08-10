import React from 'react';
import { shallow } from 'enzyme';

import Home from '.';

const setUp = (props = {}) => {
  const component = shallow(<Home />);
  return component;
};

describe('Home Page', () => {
  let component;
  beforeEach(() => {
    component = setUp({});
  });
  it('Should render without errors', () => {
    expect(component).toMatchSnapshot();
  });
  it('Should render Home Page div', () => {
    const wrapper = component.find(`[data-test='home-page']`);
    expect(wrapper.length).toBe(1);
  });
});
