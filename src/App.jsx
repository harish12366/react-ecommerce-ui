import React, { useState } from 'react';
import Banner from './components/Banner';
import Header from './components/Header';
import products from './data/ProductsData';
import ProductCard from './components/ProductCard';
import './App.css';

const App = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleRemoveFromCart = (productId) => {
    setCart(cart.filter((product) => product.id !== productId));
  };

  return (
    <>
      <Header cartCount={cart.length} />
      <Banner />

      <div className="product-cards">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            onAddToCart={() => handleAddToCart(product)}
            onRemoveFromCart={() => handleRemoveFromCart(product.id)}
            isInCart={cart.some((item) => item.id === product.id)}
          />
        ))}
      </div>
    </>
  );
};

export default App;