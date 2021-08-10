// import { render, screen } from '@testing-library/react';
// import App from './index';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import React from 'react';
import { shallow } from 'enzyme';

import App from '.';

const setUp = (props = {}) => {
  const component = shallow(<App {...props} />);
  return component;
};

describe('App', () => {
  let component;
  beforeEach(() => {
    component = setUp({});
  });
  it('Should render without errors', () => {
    expect(component).toMatchSnapshot();
  });
  it('Should render App div', () => {
    const wrapper = component.find(`[data-test='app']`);
    expect(wrapper.length).toBe(1);
  });
});
