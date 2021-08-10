import { reducer } from './index';
import {
  HANDLE_MODAL,
  ADD_ITEM,
  PRODUCT_LIST,
  INCREMENT,
  DECREMENT,
  GET_TOTAL,
  REMOVE_ITEM,
  CHANGE_CURRENCY,
} from '../action/types';

describe('Cart Reducer', () => {
  let initialState;
  beforeEach(() => {
    initialState = {
      showModal: false,
      cart: [],
      products: [],
      total: 0,
      currency: [],
      currencies: 'USD',
      cached: {},
      error: null,
    };
  });
  it('Should return default state', () => {
    const newState = reducer(undefined, {});
    expect(newState).toEqual(initialState);
  });

  it('Should handle Modal', () => {
    const newState = reducer(undefined, {
      type: HANDLE_MODAL,
      payload: true,
    });
    expect(newState).toEqual({ ...initialState, showModal: true });
  });

  it('Should handle INCREASE', () => {
    const cached = { 1: 3 };
    const newState = reducer(undefined, {
      type: INCREMENT,
      payload: { cached },
    });
    expect(newState).toEqual({ ...initialState, cached });
  });

  it('Should handle PRODUCT LIST', () => {
    const products = [{ id: 1, title: 'body lotion' }];
    const currency = ['USD', 'NGN'];
    const error = null;
    const newState = reducer(undefined, {
      type: PRODUCT_LIST,
      payload: { products, currency, error },
    });
    expect(newState).toEqual({ ...initialState, products, currency });
  });
  
  it('Should handle ADD ITEM', () => {
    const cart = [{ id: 1, title: 'body lotion' }];
    const error = null;
    const cached = { 1: 2 };
    const  showModal= false;
    const newState = reducer(undefined, {
      type: ADD_ITEM,
      payload: { cart, error, cached, showModal },
    });
    expect(newState).toEqual({ ...initialState, cart, cached });
  });

  it('Should handle DECREMENT', () => {
    const obj = {
      cached: {},
      showModal: false,
      cart: [],
 
    };
    const newState = reducer(undefined, {
      type: DECREMENT,
      payload: obj,
    });
    expect(newState).toEqual({
      ...initialState,
    });
  });

  it('Should handle GET TOTAL', () => {
    const newState = reducer(undefined, {
      type: GET_TOTAL,
      payload: '0.00',
    });
    expect(newState).toEqual({ ...initialState, total: '0.00' }); 
  });

  it('Should handle REMOVE ITEM', () => {
    const cart = [];
    const showModal = false;
    const newState = reducer(undefined, {
      type: REMOVE_ITEM,
      payload: { cart, showModal },
    });
    expect(newState).toEqual({ ...initialState, cart });
  });

  it('Should handle CHANGE CURRENCY', () => {
    const currencies = 'NGN';
    const newState = reducer(undefined, {
      type: CHANGE_CURRENCY,
      payload: currencies,
    });
    expect(newState).toEqual({ ...initialState, currencies });
  });
});
