import React from 'react';

function Header({ setIsAuthModalOpen, setIsLogin }) {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">Gian's Foodhouse</h1>
        <nav className="nav">
          <button
            className="nav-button login-button"
            onClick={() => {
              setIsLogin(true);
              setIsAuthModalOpen(true);
            }}
          >
            Login
          </button>
          <button
            className="nav-button signup-button"
            onClick={() => {
              setIsLogin(false);
              setIsAuthModalOpen(true);
            }}
          >
            Sign Up
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;