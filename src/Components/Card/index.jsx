import React from 'react';
import PropTypes from 'prop-types';

import Button from 'Components/Button';

import './card.scss';

const Card = ({ src, title, currency, price, btnName, btnOnClick }) => {
  return (
    <>
      <div className="card" data-test="card">
        <div className="img">
          <img src={src} alt="Product" />
        </div>
        <div className="desc">
          <h6>{title}</h6>
          <h4>
            from {currency}
            <span>{price?.toFixed(2)}</span>
          </h4>
        </div>
        <div className="card-btn">
          <Button name={btnName} onClick={btnOnClick} />
        </div>
      </div>
    </>
  );
};

Card.defaultProps = {
  src: 'image',
  title: 'Cream',
  price: 0,
  currency: 'NGN',
};

Card.propTypes = {
  btnOnClick: PropTypes.func.isRequired,
  btnName: PropTypes.string.isRequired,
  src: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  currency: PropTypes.string,
};

export default Card;
