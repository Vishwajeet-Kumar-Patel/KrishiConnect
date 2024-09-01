import React from 'react';

const ProductItem = ({ product }) => {
  return (
    <div className="product-item border rounded-lg p-4 m-2 shadow-md">
      <img src={product.image} alt={product.name} className="w-full h-32 object-cover mb-4" />
      <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
      <p className="text-gray-600 mb-2">Price: Rs. {product.price}</p>
      <p className="text-gray-500 mb-4">{product.description}</p>
      <button className="bg-green-500 text-white py-2 px-4 rounded">View Details</button>
    </div>
  );
};

export default ProductItem;
