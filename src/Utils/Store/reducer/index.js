import { total } from 'Helper/index.js';
import {
  HANDLE_MODAL,
  ADD_ITEM,
  PRODUCT_LIST,
  INCREMENT,
  DECREMENT,
  GET_TOTAL,
  REMOVE_ITEM,
  CHANGE_CURRENCY,
} from '../action/types.js';

export const initialState = {
  products: [],
  currencies: 'USD',
  currency: [],
  cart: [],
  showModal: false,
  total: 0,
  error: null,
  cached: {},
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_LIST:
      const { products, currency, error } = action.payload;
      return {
        ...state,
        products,
        currency,
        error,
      };
    case CHANGE_CURRENCY:
      return { ...state, currencies: action.payload };
    case HANDLE_MODAL:
      return { ...state, showModal: action.payload };
    case ADD_ITEM:
      const { cart, showModal, cached } = action.payload;
      return {
        ...state,
        cart,
        showModal,
        cached,
      };
    case REMOVE_ITEM:
      return {
        ...state,
        cart: action.payload?.cart,
        showModal: action.payload?.showModal,
      };
    case GET_TOTAL:
      return { ...state, total: total(state.cart, state.cached) };
    case INCREMENT:
      return {
        ...state,
        cached: action.payload?.cached,
      };
    case DECREMENT:
      return {
        ...state,
        cart: action.payload?.cart,
        cached: action.payload?.cached,
        showModal: action.payload?.showModal,
      };
    default: {
      return {
        ...state,
        ...action.payload,
      };
    }
  }
};
