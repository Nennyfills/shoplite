import React from 'react';
import { shallow } from 'enzyme';

import { checkProps } from 'Test/propsTypes';
import MiniHeader from '.';

const props = {
  products: [],
};

const setUp = (props = {}) => {
  const component = shallow(<MiniHeader {...props} />);
  return component;
};

describe('Mini Header', () => {
  let component;
  beforeEach(() => {
    component = setUp(props);
  });
  it('Should render without errors', () => {
    expect(component).toMatchSnapshot();
  });
  it('Should render footer div', () => {
    const wrapper = component.find(`[data-test='mini-header']`);
    expect(wrapper.length).toBe(1);
  });
  it('Checking PropTypes should not throw error', () => {
    const propErr = checkProps(MiniHeader, props);
    expect(propErr).toBeUndefined();
  });
});
