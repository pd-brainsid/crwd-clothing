import React from 'react';
import './header.styles.scss';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Header = ({currentUser, hidden}) => (
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
      {currentUser ? (
        <div className="nav-item" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="nav-item" to={'/sign'}>
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
  currentUser,
  hidden,
});

export default connect(mapStateToProps)(Header);
