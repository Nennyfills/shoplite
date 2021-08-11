import React from 'react';
import PropTypes from 'prop-types';

import Button from 'Components/Button';
import '../modal.scss';

const ModalFooter = ({ currencies, total, onClick }) => {
  return (
    <div className="modal-footer" data-test="modal-footer">
      <div></div>
      <section className="top">
        <h4>Subtotal</h4>
        <h5>{`${currencies} ${total}`}</h5>
      </section>
      <section className="bottom">
        <Button name="Proceed To CheckOut" onClick={onClick} />
      </section>
    </div>
  );
};

ModalFooter.defaultProps = {
  total: '0',
  currencies: 'NGN',
  onClick: () => '',
};

ModalFooter.propTypes = {
  total: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  currencies: PropTypes.string,
  onClick: PropTypes.func,
};

export default ModalFooter;
