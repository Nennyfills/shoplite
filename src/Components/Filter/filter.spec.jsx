import React from 'react';
import { shallow } from 'enzyme';

import { checkProps } from 'Test/propsTypes';
import Filter from '.';

const props = {
  onChange: jest.fn(),
  products: ['NGN', 'EROS'],
  currencies: 'NGN',
};

const setUp = (props = {}) => {
  const component = shallow(<Filter {...props} />);
  return component;
};

describe('Filter', () => {
  let component;
  beforeEach(() => {
    component = setUp(props);
  });

  it('Should render without errors', () => {
    expect(component).toMatchSnapshot();
  });

  it('Should render filter div', () => {
    const wrapper = component.find(`[data-test='filter']`);
    expect(wrapper.length).toBe(1);
  });

  it('Should render drop down button', () => {
    const wrapper = component.find(`[data-test='filter-selector']`);
    expect(wrapper.length).toBe(1);
  });

  it('Should simulate currency change', () => {
    const e = {
      target: {
        value: 'NGN',
      },
    };
    const select = component.find(`[data-test='filter-selector']`);
    select.simulate('change', e);
    expect(props.onChange.mock.calls.length).toBe(1);
  });

  it('Checking PropTypes should not throw error', () => {
    const propErr = checkProps(Filter, props);
    expect(propErr).toBeUndefined();
  });
});
