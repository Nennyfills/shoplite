import React from 'react';
import PropTypes from 'prop-types';

import { useDispatcher } from 'Utils/CustomHooks/useDispatcher';
import './header.scss';

const Header = () => {
  const { cached } = useDispatcher();
  return (
    <div className="header" data-test="header">
      <section className="header-left">
        <h3>LUMIN</h3>
        <ul>
          <li>Shop</li>
          <li>Learn</li>
        </ul>
      </section>
      <section className="header-right">
        <ul>
          <li>Account</li>
          <li>
            <i className="fa fa-shopping-cart"></i>{' '}
            <li className="cart-nums">
              {Object.keys(cached).length !== 0 &&
                Object.values(cached).reduce((a, b) => a + b)}
            </li>
          </li>
        </ul>
      </section>
    </div>
  );
};

Header.defaultProps = {
  cached: {},
};

Header.propTypes = {
  cached: PropTypes.object,
};

export default Header;
