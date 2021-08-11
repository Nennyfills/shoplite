/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';

import { useDispatcher } from 'Utils/CustomHooks/useDispatcher';
import './header.scss';

const Header = () => {
  const { cached } = useDispatcher();
  return (
    <nav className="navbar">
      <label className="navbar-toggle" id="js-navbar-toggle" for="chkToggle">
        <i className="fa fa-bars"></i>
      </label>
      <a className="logo" id="hide-list">
        LUMIN
      </a>
      <ul className="main-nav" id="js-menu">
        <a className="logo" id="">
          LUMIN
        </a>
        <li>
          <a href="#" className="nav-links" id="hide-list-2">
            Shop
          </a>
        </li>
        <li>
          <a href="#" className="nav-links" id="hide-list-2">
            Learn
          </a>
        </li>
      </ul>
      <input type="checkbox" id="chkToggle"></input>
      <ul className="main-nav" id="js-menu">
        <li>
          <a href="#" className="nav-links" id="hide-list">
            Shop
          </a>
        </li>
        <li>
          <a href="#" className="nav-links" id="hide-list">
            Learn
          </a>
        </li>
        <li>
          <a href="#" className="nav-links">
            Account
          </a>
        </li>
        <li>
          <a href="#" className="nav-links">
            <i className="fa fa-shopping-cart"></i>{' '}
            <span className="cart-nums">
              {Object.keys(cached).length !== 0 &&
                Object.values(cached).reduce((a, b) => a + b)}
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

Header.defaultProps = {
  cached: {},
};

Header.propTypes = {
  cached: PropTypes.object,
};

export default Header;
