import React from 'react';
import './header.styles.scss';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {Link} from 'react-router-dom';

const Header = () => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="navigation">
      <Link to="/shop" className="nav-item">
        SHOP
      </Link>
      <Link to="/contacts" className="nav-item">
        CONTACTS
      </Link>
    </div>
  </div>
);

export default Header;
