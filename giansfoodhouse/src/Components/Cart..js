import React from 'react';

function Cart({ cart, removeFromCart, handleCheckout }) {
  return (
    <section id="cart">
      <h2>Your Cart</h2>
      <ul id="cartItems">
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map(item => (
            <li key={item.id}>
              {item.name} - ${item.price}
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))
        )}
      </ul>
      <button onClick={handleCheckout} disabled={cart.length === 0}>
        Checkout
      </button>
    </section>
  );
}

export default Cart;