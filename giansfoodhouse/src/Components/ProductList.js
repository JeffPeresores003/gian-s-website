import React from 'react';

function ProductList({ products, addToCart }) {
  return (
    <section id="products">
      <h2>Our Menu</h2>
      <div id="productList">
        {products.map(product => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductList;