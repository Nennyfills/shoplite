import React from 'react';
import { shallow } from 'enzyme';

import Button from '.';
import { checkProps } from 'Test/propsTypes';

const props = {
  onClick: jest.fn(),
  name: 'cream',
  loading: false,
};

const setUp = (props = {}) => {
  const component = shallow(<Button {...props} />);
  return component;
};

describe('Button', () => {
  let component;
  beforeEach(() => {
    component = setUp(props);
  });
  it('should render without errors', () => {
    expect(component).toMatchSnapshot();
  });
  it('should render button', () => {
    const wrapper = component.find(`[data-test='reuseable-button']`);
    expect(wrapper.length).toBe(1);
  });
  it('Checking PropTypes should not throw error', () => {
    const propErr = checkProps(Button, props);
    expect(propErr).toBeUndefined();
  });
  it('should render onClick', () => {
    const button = component.find(`[data-test='reuseable-button']`);
    button.simulate('click');
    expect(props.onClick.mock.calls.length).toBe(1);
  });
});
