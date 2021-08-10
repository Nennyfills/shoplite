import React from 'react';
import PropTypes from 'prop-types';

import './button.scss';

const Button = ({ name, loading, onClick }) => {
  return (
    <div className="button">
      <button data-test="reuseable-button" onClick={onClick}>
        {loading ? 'Processing' : name}
      </button>
    </div>
  );
};

Button.defaultProps = {
  loading: false,
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  loading: PropTypes.bool,
};

export default Button;
