import React from 'react';
import PropTypes from 'prop-types';

import '../modal.scss';

const ModalBody = ({
  cart,
  cached,
  currencies,
  handleIncrease,
  handleDecrease,
  handleRemoveItem,
  getTotal,
}) => { 
  return (
    <div className="modal-body" data-test="modal-Body">
      {cart?.map((val) => (
        <div key={val.title} className="inner">
          <div className="close">
            <button
              className="close-card"
              onClick={() => handleRemoveItem(val.id)}
            >
              <i className="fa fa-remove"></i>
            </button>
          </div>
          <section className="top">
            <div className="top-1">
              <h4>{val.title}</h4>
              <p>Combination</p>
              <p>One time purchase of Two Month supply.</p>
            </div>
            <div className="top-2">
              <img src={val.image_url} alt="cream" />
            </div>
          </section>
          <section className="bottom">
            <div className="box">
              <button
                onClick={() => {
                  handleDecrease(val.id);
                  getTotal();
                }}
                className="box-icon"
              >
                -
              </button>
              <h4>{cached[val.id]}</h4>
              <button
                onClick={() => {
                  handleIncrease(val.id);
                  getTotal();
                }}
                className="box-icon"
              >
                +
              </button>
            </div>
            <div className="price">{`${currencies} ${val.price}`}</div>
          </section>
        </div>
      ))}
    </div>
  );
};

ModalBody.defaultProps = {
  products: [],
  cart: [],
  cached: {},
  currencies: 'NGN',
};

ModalBody.propTypes = {
  getTotal: PropTypes.func.isRequired,
  handleIncrease: PropTypes.func.isRequired,
  handleDecrease: PropTypes.func.isRequired,
  handleRemoveItem: PropTypes.func.isRequired,
  products: PropTypes.array,
  cart: PropTypes.array,
  cached: PropTypes.object,
  currencies: PropTypes.string,
};

export default ModalBody;
