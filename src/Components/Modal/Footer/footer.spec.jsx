import React from 'react';
import { shallow } from 'enzyme';

import { checkProps } from 'Test/propsTypes';
import ModalFooter from '.';

const props = {
  total: 0,
  currencies: 'NGN',
};

const setUp = (props = {}) => {
  const component = shallow(<ModalFooter {...props} />);
  return component;
};

describe('Modal Footer', () => {
  let component;
  beforeEach(() => {
    component = setUp(props);
  });
  it('Should render without errors', () => {
    expect(component).toMatchSnapshot();
  });
  it('Should render Body div', () => {
    const wrapper = component.find(`[data-test='modal-footer']`);
    expect(wrapper.length).toBe(1);
  });
  it('Checking PropTypes should not throw error', () => {
    const propErr = checkProps(ModalFooter, props);
    expect(propErr).toBeUndefined();
  });
});
