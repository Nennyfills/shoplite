import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import CardList from 'Components/CardList';
import { useFetch } from 'Utils/CustomHooks/useFetch';
import MiniHeader from 'Components/MiniHeader';
import LuminModal from 'Components/Modal';
import { useDispatcher } from 'Utils/CustomHooks/useDispatcher';

const Home = () => {
  const { loading, error } = useFetch();

  const {
    handleModalToggle,
    handleAddItem,
    products,
    showModal,
    cart,
    cached,
    currencies,
    currency,
    total,
    handleDecrease,
    handleIncrease,
    handleRemoveItem,
    handleChangeCurrency,
    handleGetTotal,
  } = useDispatcher();

  return (
    <div className="" data-test="home-page">
      <ToastContainer />
      <MiniHeader />
      <CardList
        products={products}
        loading={loading}
        error={error}
        showModal={showModal}
        addAction={handleAddItem}
        getTotal={handleGetTotal}
        currency={currencies}
      />
      {
        <LuminModal
          visible={showModal}
          closeModal={handleModalToggle}
          title="YOUR CART"
          cart={cart}
          cached={cached}
          total={total}
          currencies={currencies}
          currency={currency}
          handleDecrease={handleDecrease}
          handleIncrease={handleIncrease}
          handleRemoveItem={handleRemoveItem}
          currencyChange={handleChangeCurrency}
          getTotal={handleGetTotal}
        />
      }
    </div>
  );
};
export default Home;
