import React, { useState } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import AuthModal from './components/AuthModal';

function App() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: 'Pizza', price: 10, image: 'images/pizza.jpg' },
    { id: 2, name: 'Burger', price: 5, image: 'images/burger.jpg' },
    { id: 3, name: 'Pasta', price: 8, image: 'images/pasta.jpg' },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const handleCheckout = () => {
    alert('Thank you for your order!');
    setCart([]);
  };

  return (
    <div>
      <Header
        setIsAuthModalOpen={setIsAuthModalOpen}
        setIsLogin={setIsLogin}
      />
      <AuthModal
        isOpen={isAuthModalOpen}
        setIsOpen={setIsAuthModalOpen}
        isLogin={isLogin}
      />
      <ProductList products={products} addToCart={addToCart} />
      <Cart cart={cart} removeFromCart={removeFromCart} handleCheckout={handleCheckout} />
    </div>
  );
}

export default App;