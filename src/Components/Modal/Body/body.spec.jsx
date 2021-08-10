import React from 'react';
import { shallow } from 'enzyme';

import { checkProps } from 'Test/propsTypes';
import BodyModal from '.';

const props = {
  products: [],
  cart: [],
  cached: {},
  currencies: 'NGN',
  getTotal: jest.fn(),
  handleIncrease: jest.fn(),
  handleDecrease: jest.fn(),
  handleRemoveItem: jest.fn(),
};

const setUp = (props = {}) => {
  const component = shallow(<BodyModal {...props} />);
  return component;
};

describe('Body Modal', () => {
  let component;
  beforeEach(() => {
    component = setUp(props);
  });
  it('Should render without errors', () => {
    expect(component).toMatchSnapshot();
  });
  it('Should render Body div', () => {
    const wrapper = component.find(`[data-test='modal-Body']`);
    expect(wrapper.length).toBe(1);
  });
  it('Checking PropTypes should not throw error', () => {
    const propErr = checkProps(BodyModal, props);
    expect(propErr).toBeUndefined();
  });
});
