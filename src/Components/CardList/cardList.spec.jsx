import React from 'react';
import { shallow } from 'enzyme';

import { checkProps } from 'Test/propsTypes';
import CardList from '.';

const props = {
  btnOnClick: jest.fn(),
  getTotal: jest.fn(),
  addAction: jest.fn(),
  products: [],
  loading: true,
};

const setUp = (props = {}) => {
  const component = shallow(<CardList {...props} />);
  return component;
};

describe('Card List', () => {
  let component;
  beforeEach(() => {
    component = setUp(props);
  });
  it('Should render without errors', () => {
    expect(component).toMatchSnapshot();
  });
  it('Should render cardList div', () => {
    const wrapper = component.find(`[data-test='card-list']`);
    expect(wrapper.length).toBe(1);
  });
  it('Checking PropTypes should not throw error', () => {
    const propErr = checkProps(CardList, props);
    expect(propErr).toBeUndefined();
  });
});
