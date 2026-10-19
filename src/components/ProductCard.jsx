import React from 'react';

const ProductCard = ({
  name,
  price,
  image,
  onAddToCart,
  onRemoveFromCart,
  isInCart,
}) => {
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>₹{price}</p>

      {isInCart ? (
        <button onClick={onRemoveFromCart}>
          Remove from Cart
        </button>
      ) : (
        <button onClick={onAddToCart}>
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default ProductCard;