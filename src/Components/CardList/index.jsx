import React from 'react';
import PropTypes from 'prop-types';

import Card from 'Components/Card';
import CardLoader from 'Components/CardLoader';

import './cardList.scss';

const CardList = ({ products, loading, getTotal, addAction }) => {
  return (
    <div className="card-list" data-test="card-list">
      <div className="list-1">
        {loading
          ? [1, 2, 3].map((_, index) => (
              <div key={index}>
                <CardLoader />
              </div>
            ))
          : products?.map((item) => (
              <div key={item.id}>
                <Card
                  src={item.image_url}
                  title={item.title}
                  currency={'$'}
                  price={item.price}
                  btnName={'Add to Cart'}
                  btnOnClick={() => {
                    addAction(item);
                    getTotal();
                  }}
                />
              </div>
            ))}
      </div>
    </div>
  );
};

CardList.defaultProps = {
  loading: true,
  products: [],
};

CardList.propTypes = {
  getTotal: PropTypes.func.isRequired,
  addAction: PropTypes.func.isRequired,
  products: PropTypes.array,
  loading: PropTypes.bool,
};

export default CardList;
