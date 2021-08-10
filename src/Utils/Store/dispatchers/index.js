import {
  handleModal,
  addItem,
  productList,
  increase,
  decrease,
  getTotal,
  removeItem,
  changeCurrency,
} from '../action';

export const handleModalToggle = (showModal, dispatch) => {
  return dispatch(handleModal(!showModal));
};

export const handleAddItem = (
  selectedItem,
  cart,
  showModal,
  cached,
  dispatch
) => {
  if (cached[selectedItem.id]) {
    return dispatch(
      addItem({
        cached: { ...cached, [selectedItem.id]: cached[selectedItem.id] + 1 },
        showModal: !showModal,
        cart: [...cart],
        currentId: selectedItem.id,
      })
    );
  }
  return dispatch(
    addItem({
      cart: [...cart, { ...selectedItem }],
      showModal: !showModal,
      cached: { ...cached, [selectedItem.id]: 1 },
      currentId: selectedItem.id,
    })
  );
};

export const handleRemoveItem = (cart, selectedItem, showModal, dispatch) => {
  console.log(selectedItem, 'selectedItem');
  const RemainingCart = cart.filter((item) => item.id !== selectedItem);
  if (RemainingCart.length > 0) {
    return dispatch(removeItem({ cart: RemainingCart, showModal: true }));
  }
  return dispatch(removeItem({ cart: RemainingCart, showModal: !showModal }));
};

export const handleProductList = (data, dispatch) => {
  if (data?.error) return dispatch(productList(data?.error?.message));
  return dispatch(productList(data));
};

export const handleIncrease = (cached, id, dispatch) => {
  const count = { ...cached, [id]: cached[id] + 1 };
  return dispatch(increase({ cached: count }));
};

export const handleDecrease = (cached, cart, id, showModal, dispatch) => {
  let result;
  const count = cached[id] - 1;
  if (count === 0) {
    const index = cart.findIndex((item) => item.id === id);
    const newCart = cart.splice(index, 0);
    result = { ...cached };
    delete result[id];
    return dispatch(
      decrease({
        cart: newCart,
        cached: result,
        showModal: !showModal,
      })
    );
  }
  result = { ...cached, [id]: cached[id] - 1 };
  return dispatch(decrease({ cart, cached: result, showModal: true }));
};

export const handleGetTotal = (cart, cached, dispatch) => {
  return dispatch(getTotal({}));
};

export const handleChangeCurrency = (currency, dispatch) => {
  return dispatch(changeCurrency(currency));
};
