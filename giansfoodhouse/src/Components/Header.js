import React from 'react';

function Header({ setIsAuthModalOpen, setIsLogin }) {
  return (
    <header>
      <h1>Gian's Foodhouse</h1>
      <nav>
        <button onClick={() => {
          setIsLogin(true);
          setIsAuthModalOpen(true);
        }}>
          Login
        </button>
        <button onClick={() => {
          setIsLogin(false);
          setIsAuthModalOpen(true);
        }}>
          Sign Up
        </button>
      </nav>
    </header>
  );
}

export default Header;