import React from 'react';
import PropTypes from 'prop-types';

import Filter from 'Components/Filter';

import './miniHeader.scss';
const MiniHeader = ({ products, onChange }) => {
  return (
    <div className="mini-header" data-test="mini-header">
      <div>
        <h3>All Products</h3>
        <h4>A 360° look at Lumin</h4>
      </div>
      <div>
        <Filter products={[]} onChange={onChange} />
      </div>
    </div>
  );
};

MiniHeader.defaultProps = {
  products: [],
  onChange: () => '',
};

MiniHeader.propTypes = {
  products: PropTypes.array,
  onChange: PropTypes.func,
};

export default MiniHeader;
