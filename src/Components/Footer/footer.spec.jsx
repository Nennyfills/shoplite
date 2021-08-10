import React from 'react';
import { shallow } from 'enzyme';

import Footer from '.';

const setUp = (props = {}) => {
  const component = shallow(<Footer />);
  return component;
};

describe('Footer', () => {
  let component;
  beforeEach(() => {
    component = setUp({});
  });
  it('Should render without errors', () => {
    expect(component).toMatchSnapshot();
  });
  it('Should render footer section', () => {
    const wrapper = component.find(`[data-test='footer']`);
    expect(wrapper.length).toBe(1);
  });
});
