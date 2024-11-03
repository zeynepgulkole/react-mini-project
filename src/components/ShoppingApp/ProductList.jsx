// Ürünlerin listeleneceği bir component.

import React from 'react';
import ProductItem from './ProductItem';

export default function ProductList({ products, addToCart }) {
  return (
    <div>
      <h2>Ürünler</h2>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
}
