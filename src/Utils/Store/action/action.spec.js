import {
  handleModal,
  addItem,
  productList,
  increase,
  decrease,
  getTotal,
  removeItem,
  changeCurrency,
} from '.';

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


describe('Actions', () => {
  let payload;
  beforeEach(() => {
    payload = {};
  });
  it('Should create action for HANDLE MODAL', () => {
    const expected = { type: HANDLE_MODAL, payload };
    expect(handleModal(payload)).toEqual(expected);
  });
  it('Should create action for ADD ITEM', () => {
    const expected = { type: ADD_ITEM, payload };
    expect(addItem(payload)).toEqual(expected);
  });
  it('Should create action for PRODUCT LIST', () => {
    const expected = { type: PRODUCT_LIST, payload };
    expect(productList(payload)).toEqual(expected);
  });
  it('Should create action for INCREMENT', () => {
    const expected = { type: INCREMENT, payload };
    expect(increase(payload)).toEqual(expected);
  });
  it('Should create action for DECREMENT', () => {
    const expected = { type: DECREMENT, payload };
    expect(decrease(payload)).toEqual(expected);
  });
  it('Should create action for GET TOTAL', () => {
    const expected = { type: GET_TOTAL, payload };
    expect(getTotal(payload)).toEqual(expected);
  });
  it('Should create action for REMOVE ITEM', () => {
    const expected = { type: REMOVE_ITEM, payload };
    expect(removeItem(payload)).toEqual(expected);
  });
  it('Should create action for CHANGE CURRENCY', () => {
    const expected = { type: CHANGE_CURRENCY, payload };
    expect(changeCurrency(payload)).toEqual(expected);
  });
});
