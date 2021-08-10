import React from 'react';
import { shallow } from 'enzyme';

import CardList from '.';

const setUp = (props = {}) => {
  const component = shallow(<CardList {...props} />);
  return component;
};

describe('Card Loader', () => {
  let component;
  beforeEach(() => {
    component = setUp({});
  });
  it('Should render without errors', () => {
    expect(component).toMatchSnapshot();
  });
  it('Should render cardList div', () => {
    const wrapper = component.find(`[data-test='card-loader']`);
    expect(wrapper.length).toBe(1);
  });
});
