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
const materials = [
  {
    id: 1,
    name: 'Toutes les matières',
  },
  {
    id: 2,
    name: 'Cotton',
  },
  {
    id: 3,
    name: 'Satin',
  },
  {
    id: 4,
    name: 'Sythetic',
  },
  {
    id: 5,
    name: 'Lin',
  },
]
const Filters = ({
  activeCategory,
  setActiveCategory,
  activePrice,
  setActivePrice,
  activeMaterial,
  setActiveMaterial,
  products,
  setFilters,
}) => {
  useEffect(() => {
    if (activeCategory === 'Tout' && activePrice === '' && activeMaterial === 'Toutes les materières') {
      setFilters(products);
      return;
    }

    const filterCategory = products.filter((item) =>
      activeCategory === 'Tout' ? item : item.category === activeCategory
    );

    const filterMaterial = products.filter((item) =>
      activeMaterial === 'Toutes les matières' ? item : item.material === activeMaterial
    );

    const filterPrice = filterCategory && filterMaterial.filter((item) =>
      activePrice === ''
        ? item
        : activePrice === 'ms20'
        ? item.price < 20
        : activePrice === 'etr2535'
        ? item.price >= 25 && item.price <= 35
        : item.price > 35
    );

    setFilters(filterPrice);
  }, [activeCategory, activePrice, products, setFilters, activeMaterial,
    setActiveMaterial,]);
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
        {materials.map((item) => (
          <button
            onClick={() => setActiveMaterial(item.name)}
            key={item.id}
            className={`bg-white border-2 border-gray-500 rounded-lg px-4 py-2 mr-2 mb-2 ${
              activeMaterial === item.name && 'bg-yellow-500 text-white font-bold'
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