import { AppContext } from 'Utils/Store';
import { useContext } from 'react';
import {
  handleIncrease,
  handleDecrease,
  handleModalToggle,
  handleAddItem,
  handleGetTotal,
  handleRemoveItem,
  handleProductList,
  handleChangeCurrency,
} from 'Utils/Store/dispatchers';

const useDispatcher = () => {
  const { dispatch, state } = useContext(AppContext);
  return {
    ...state,
    handleIncrease: (id) => handleIncrease(state.cached, id, dispatch),
    handleDecrease: (id) =>
      handleDecrease(state.cached, state.cart, id, state.showModal, dispatch),
    handleModalToggle: () => handleModalToggle(state.showModal, dispatch),
    handleAddItem: (selectedItem) =>
      handleAddItem(
        selectedItem,
        state.cart,
        state.showModal,
        state.cached,
        dispatch
      ),
    handleGetTotal: () => handleGetTotal(state.cart, state.cached, dispatch),
    handleRemoveItem: (selectedItem, remove) =>
      handleRemoveItem(state.cart, selectedItem, state.showModal, dispatch),
    handleProductList: (data) => handleProductList(data, dispatch),
    handleChangeCurrency: (currency) =>
      handleChangeCurrency(currency, dispatch),
  };
};

export { useDispatcher };
