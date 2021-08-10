import React from 'react';
import PropTypes from 'prop-types';

import './filter.scss';

const Filter = ({ products, currencies, onChange }) => {
  return (
    <div className="filter" data-test="filter">
      <select
        data-test="filter-selector"
        type="text"
        id="filter-input"
        list="products"
        name="option"
        onChange={onChange}
      >
        <option>{currencies ?? 'Filter by'}</option>
        {products?.map((item) => (
          <option
            value={currencies ? item : item.title}
            key={currencies ? item : item.title}
          >
            {currencies ? item : item.title}
          </option>
        ))}
      </select>
    </div>
  );
};

Filter.defaultProps = {
  loading: true,
  products: [],
  currencies: null,
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  products: PropTypes.array,
  currencies: PropTypes.string,
};
export default Filter;
