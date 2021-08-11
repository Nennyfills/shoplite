import React from 'react';
import PropTypes from 'prop-types';

import Filter from 'Components/Filter';
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
    <div
      data-test="lumin-modal"
      className={visible ? 'overlay' : 'undo-overlay'}
    >
      <div
        className={`side-drawer ${visible ? 'open' : ''}`}
      >
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
        <div className="modal-content">
          <ModalBody
            cart={cart}
            cached={cached}
            currencies={currencies}
            handleDecrease={handleDecrease}
            handleIncrease={handleIncrease}
            handleRemoveItem={handleRemoveItem}
            getTotal={getTotal}
          />
        </div>
        <ModalFooter currencies={currencies} total={total} />
      </div>
    </div>
  );
};

LuminModal.defaultProps = {
  products: [],
  cart: [],
  cached: {},
  currencies: 'NGN',
  total: '0',
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
  total: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
  visible: PropTypes.bool,
};

export default LuminModal;
