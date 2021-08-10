import React from 'react';
import { shallow } from 'enzyme';

import Header from '.';

const setUp = (props = { cached: { 2: 4 } }) => {
  const component = shallow(<Header />);
  return component;
};

describe('Header', () => {
  let component;
  beforeEach(() => {
    component = setUp({});
  });
  it('Should render without errors', () => {
    expect(component).toMatchSnapshot();
  });
});
