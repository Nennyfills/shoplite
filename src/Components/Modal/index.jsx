import React from 'react';
import PropTypes from 'prop-types';

import Filter from 'Components/Filter';
import Modal from 'react-awesome-modal';
import ModalBody from './Body';
import ModalFooter from './Footer';

import './modal.scss';

const LuminModal = ({
  title,
  visible,
  closeModal,
  cart,
  currencies,
  total,
  cached,
  handleDecrease,
  handleIncrease,
  handleRemoveItem,
  currency,
  currencyChange,
  getTotal,
}) => {
  return (
    <section className="modal" data-test="lumin-modal">
      <Modal visible={visible} width="700" height="1000" effect="fadeInRight">
        <h1 className="title">{title}</h1>
        <button className="close-modal" onClick={closeModal}>
          <i className="fas fa-angle-right"></i>
        </button>
        <div className="filter">
          <Filter
            products={currency}
            currencies={currencies}
            onChange={(event) => currencyChange(event.target.value)}
          />
        </div>
        <ModalBody
          cart={cart}
          cached={cached}
          currencies={currencies}
          handleDecrease={handleDecrease}
          handleIncrease={handleIncrease}
          handleRemoveItem={handleRemoveItem}
          getTotal={getTotal}
        />
        <ModalFooter currencies={currencies} total={total} />
      </Modal>
    </section>
  );
};

LuminModal.defaultProps = {
  products: [],
  cart: [],
  cached: {},
  currencies: 'NGN',
  total: 0,
  visible: false,
  title: '',
};

LuminModal.propTypes = {
  getTotal: PropTypes.func.isRequired,
  handleIncrease: PropTypes.func.isRequired,
  handleDecrease: PropTypes.func.isRequired,
  handleRemoveItem: PropTypes.func.isRequired,
  products: PropTypes.array,
  cart: PropTypes.array,
  cached: PropTypes.object,
  currencies: PropTypes.string,
  total: PropTypes.number,
  title: PropTypes.string,
  visible: PropTypes.bool,
};

export default LuminModal;
