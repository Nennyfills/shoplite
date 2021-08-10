import React from 'react';
import { shallow } from 'enzyme';

import { checkProps } from 'Test/propsTypes';
import LuminModal from '.';

const props = {
  getTotal: jest.fn(),
  handleIncrease: jest.fn(),
  handleDecrease: jest.fn(),
  handleRemoveItem: jest.fn(),
  products: [],
  cart: [],
  cached: {},
  currencies: 'NGN',
  total: 0,
  visible: false,
  title: '',
};

const setUp = (props = {}) => {
  const component = shallow(<LuminModal {...props} />);
  return component;
};

describe('Lumin Modal', () => {
  let component;
  beforeEach(() => {
    component = setUp(props);
  });
  it('Should render without errors', () => {
    expect(component).toMatchSnapshot();
  });
  it('Should render Lumin Modal div', () => {
    const wrapper = component.find(`[data-test='lumin-modal']`);
    expect(wrapper.length).toBe(1);
  });
  it('Checking PropTypes should not throw error', () => {
    const propErr = checkProps(LuminModal, props);
    expect(propErr).toBeUndefined();
  });
});
