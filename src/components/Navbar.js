import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const handleMenu = () => {
    const burger = document.querySelector('.burger');
    const menuList = document.querySelector('#' + burger.dataset.target);

    burger.classList.toggle('is-active');
    menuList.classList.toggle('is-active');
  };

  return (
    <nav className="navbar is-danger is-fixed-top">
      <div className="navbar-brand">
        <Link id="homeicon" className="navbar-item has-text-centered" to="/">
          RE/WEAR
        </Link>
        <a
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navDrop"
          onClick={handleMenu}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div className="navbar-menu">
        <div className="navbar-start">
          <div className="navbar-item has-dropdown is-hoverable">
            <Link to="/about" className="navbar-link is-arrowless">
              ABOUT
            </Link>
          </div>
          <div className="navbar-item has-dropdown is-hoverable">
            <Link to="/products" className="navbar-link is-arrowless">
              SHOP
            </Link>
          </div>
        </div>
        <div className="navbar-end">
          <div className="navbar-item has-dropdown is-hoverable">
            <Link to="/profile" className="navbar-link is-arrowless">
              profile
            </Link>
          </div>
          <div className="navbar-item has-dropdown is-hoverable">
            <Link to="/wishlist" className="navbar-link is-arrowless">
              wishlist
            </Link>
          </div>
          <div className="navbar-item has-dropdown is-hoverable">
            <Link to="/basket" className="navbar-link is-arrowless">
              basket
            </Link>
          </div>
          <div className="navbar-item has-dropdown is-hoverable">
            <Link to="/register" className="navbar-link is-arrowless">
              REGISTER
            </Link>
          </div>
          <div className="navbar-item has-dropdown is-hoverable">
            <Link to="/login" className="navbar-link is-arrowless">
              LOGIN
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
