import React from 'react';
import { shallow } from 'enzyme';

import NotFound from '.';

const setUp = (props = {}) => {
  const component = shallow(<NotFound {...props} />);
  return component;
};

describe('NotFound Page', () => {
  let component;
  beforeEach(() => {
    component = setUp({});
  });
  it('Should render without errors', () => {
    expect(component).toMatchSnapshot();
  });
  it('Should render Not Found Page div', () => {
    const wrapper = component.find(`[data-test='not-found-page']`);
    expect(wrapper.length).toBe(1);
  });
});
