import React, { useEffect } from 'react';

const categories = [
  {
    id: 1,
    name: 'Tout',
  },
  {
    id: 2,
    name: 'Robes',
  },
  {
    id: 3,
    name: 'Accessoires',
  },

];

const prices = [
  {
    id: 1,
    name: 'Moins 20',
    value: 'ms20',
  },
  {
    id: 2,
    name: 'de 25 à 35',
    value: 'etr2535',
  },
  {
    id: 3,
    name: 'plus de 40',
    value: 'pls40',
  },
  {
    id: 4,
    name: 'Effacer les Filters',
    value: 'Effacer',
  },
];

const Filters = ({
  activeCategory,
  setActiveCategory,
  activePrice,
  setActivePrice,
  products,
  setFilters,
}) => {
  useEffect(() => {
    if (activeCategory === 'Tout' && activePrice === '') {
      setFilters(products);
      return;
    }

    const filterCategory = products.filter((item) =>
      activeCategory === 'Tout' ? item : item.category === activeCategory
    );

    const filterPrice = filterCategory.filter((item) =>
      activePrice === ''
        ? item
        : activePrice === 'ms20'
        ? item.price < 20
        : activePrice === 'etr2535'
        ? item.price >= 25 && item.price <= 35
        : item.price > 35
    );

    setFilters(filterPrice);
  }, [activeCategory, activePrice, products, setFilters]);
  return (
    <div>
      <div>
        {categories.map((item) => (
          <button
            onClick={() => setActiveCategory(item.name)}
            key={item.id}
            className={`bg-white border-2 border-gray-500 rounded-lg px-4 py-2 mr-2 mb-2 ${
              activeCategory === item.name && 'bg-blue-500 text-white font-bold'
            }`}
          >
            {item.name}
          </button>
        ))}
      </div>
      <div>
        {prices.map((item) => (
          <button
            key={item.id}
            onClick={() =>
              item.value !== 'Effacer'
                ? setActivePrice(item.value)
                : setActivePrice('')
            }
            className={`bg-white border-2 border-gray-500 rounded-lg px-4 py-2 mr-2 mb-2 ${
              activePrice === item.value && 'bg-lime-500 text-white font-bold'
            }`}
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Filters;