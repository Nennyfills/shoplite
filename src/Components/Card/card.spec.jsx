import React from 'react';
import { shallow } from 'enzyme';

import { checkProps} from 'Test/propsTypes';
import Card from '.';

const props = {
    btnOnClick: jest.fn(), 
    btnName: 'btnName',
    src: 'image',
    title: 'Cream',
    price: 0,
    currency: 'NGN',
}

const setUp = (props = {}) => {
    const component = shallow(<Card {...props} />);
    return component;
}

describe('Card', () => {
    let component;
    beforeEach(() => {
        component = setUp(props);
    })
    it('Should render without errors', () => {
        expect(component).toMatchSnapshot(); 
    });
    it('Should render card div', () => {
        const wrapper = component.find(`[data-test='card']`);
        expect(wrapper.length).toBe(1); 
    })
    it('Checking PropTypes should not throw error', () => {
        const propErr = checkProps(Card, props);
        expect(propErr).toBeUndefined();
    })
})
