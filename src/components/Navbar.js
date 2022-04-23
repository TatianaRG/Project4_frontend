import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { getLoggedInUserId } from '../lib/auth.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShoppingBasket,
  faUserCircle,
  faUserSecret,
  faUsersRectangle,
} from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem('token');
    navigate('/');
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand">
          <Link id="homeicon" className="navbar-item has-text-centered" to="/">
            RE/WEAR
          </Link>
        </div>

        <div className="navbar-start is-mobile">
          <div className="navbar-item ">
            <Link to="/about" className="navbar-link is-arrowless">
              ABOUT
            </Link>
          </div>
          <div className="navbar-item is-hoverable">
            <Link to="/products" className="navbar-link is-arrowless">
              SHOP
            </Link>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item is-hoverable">
            {getLoggedInUserId() && (
              <Link to="/profile" className="navbar-link is-arrowless">
                <FontAwesomeIcon icon={faUserCircle} />
              </Link>
            )}
          </div>

          <div className="navbar-item is-hoverable">
            {getLoggedInUserId() && (
              <Link to="/basket" className="navbar-link is-arrowless">
                <FontAwesomeIcon icon={faShoppingBasket} />
              </Link>
            )}
          </div>

          <div className="navbar-item is-hoverable">
            {!getLoggedInUserId() && (
              <Link to="/register" className="navbar-link is-arrowless">
                REGISTER
              </Link>
            )}
          </div>

          <div className="navbar-item is-hoverable">
            {!getLoggedInUserId() && (
              <Link to="/login" className="navbar-link is-arrowless">
                LOGIN
              </Link>
            )}
          </div>

          <div className="navbar-item is-hoverable">
            {getLoggedInUserId() && (
              <Link
                to="/"
                className="navbar-link is-arrowless"
                onClick={handleLogout}
              >
                LOGOUT
              </Link>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
