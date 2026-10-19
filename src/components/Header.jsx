
import React from 'react';

const Header = ({ cartCount }) => {
  return (
    <header className="header">
      <a href="#" className="logo">
        <span className="logo-icon">🛍️</span>
        Shop<span className="logo-highlight">Kart</span>
      </a>

      <nav className="nav-links">
        <a href="#" className="active">Home</a>
        <a href="#products">Products</a>
        <a href="#categories">Categories</a>
        <a href="#about">About</a>
      </nav>

      <div className="header-actions">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search products..."
          />
          <span>⌕</span>
        </div>

        <button className="cart-button" aria-label="Shopping cart">
          <span className="cart-icon">🛒</span>
          <span className="cart-count">{cartCount}</span>
        </button>

        <button className="account-button" aria-label="Account">
          👤
        </button>
      </div>
    </header>
  );
};

export default Header;
