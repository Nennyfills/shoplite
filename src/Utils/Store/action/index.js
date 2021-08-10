import {
  HANDLE_MODAL,
  ADD_ITEM,
  PRODUCT_LIST,
  INCREMENT,
  DECREMENT,
  RESET,
  GET_TOTAL,
  REMOVE_ITEM,
  CHANGE_CURRENCY,
} from './types.js';

export const handleModal = (payload) => ({ type: HANDLE_MODAL, payload });

export const addItem = (payload) => ({ type: ADD_ITEM, payload });

export const productList = (payload) => ({ type: PRODUCT_LIST, payload });

export const increase = (payload) => ({ type: INCREMENT, payload });

export const decrease = (payload) => ({ type: DECREMENT, payload });

export const reset = (payload) => ({ type: RESET, payload });

export const getTotal = (payload) => ({ type: GET_TOTAL, payload });

export const removeItem = (payload) => ({ type: REMOVE_ITEM, payload });

export const changeCurrency = (payload) => ({
  type: CHANGE_CURRENCY,
  payload,
});
