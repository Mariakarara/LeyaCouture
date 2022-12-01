import React from 'react';
const Product = ({ product, handleAddToCart }) => {
  const EuEuro = new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
  });

  return (
    <div className="flex-1 flex flex-col self-stretch items-center min-w-[250px] border-2 border-['lightgray'] px-2 mr-2 mb-2 rounded-lg">
      <div className="w-[200px]">
        <img className="rounded-lg" src={product.img} alt={product.name} />
      </div>
      <h3>{product.name}</h3>
      <p className="text-red-700 font-bold">
        {EuEuro.format(product.price)}
      </p>
      <a href="/home" class="inline-flex items-center text-blue-600 hover:underline">
        Plus de détail
        <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
    </a>
      <button
        onClick={() => handleAddToCart(product)}
        className="bg-gray-300 w-full rounded-lg py-1 mt-auto mb-2 hover:bg-gray-500 hover:text-white"
      >
        Buy now
      </button>
    </div>
  );
};

export default Product;