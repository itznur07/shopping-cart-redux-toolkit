import React from "react";

const ProductCard = ({ product }) => (
  <div className="w-72 h-full rounded overflow-hidden shadow-lg m-4">
    <img
      className="w-full h-48 object-cover"
      src={product.img}
      alt={product.name}
    />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{product.name}</div>
      <p className="text-gray-700 text-base">{product.description}</p>
    </div>
    <div className="flex items-center justify-between px-5 py-2">
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
        ${product.price}
      </span>
      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
        Add to Cart
      </button>
      <span className="text-md font-semibold cursor-pointer">love</span>
    </div>
  </div>
);

export default ProductCard;
