import React from 'react';
import { useEffect, useState } from 'react';
import Cart from '../components/Cart';
import Filters from '../components/Filters';
import Header from '../components/OrderHeader';
import Loading from '../components/Loading';
import Product from '../components/Product';

function Order() {
    const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState([]);
  const [cart, setCart] = useState([]);

  const [activeCategory, setActiveCategory] = useState('All');
  const [activeMaterial, setActiveMaterial] = useState('Toutes les materières');
  const [activePrice, setActivePrice] = useState('');
  const [isShowCart, setIsShowCart] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const data = await fetch('https://mocki.io/v1/3d955b5c-cc35-4418-94dd-478d7025d332');
        const products = await data.json();

        setProducts(products.data);
        setFilters(products.data);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  //Handle Add to Cart
  const handleAddToCart = (product) => {
    setCart((prev) => {
      const findProductInCart = prev.find((item) => item.id === product.id);

      if (findProductInCart) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, amount: item.amount + 1 } : item
        );
      }

      //Firt
      return [...prev, { ...product, amount: 1 }];
    });
  };

  //Handle Remove from cart
  const handleRemoveFromCart = (id) => {
    setCart((prev) => {
      return prev.reduce((cal, item) => {
        if (item.id === id) {
          if (item.amount === 1) return cal;

          return [...cal, { ...item, amount: item.amount - 1 }];
        }

        return [...cal, { ...item }];
      }, []);
    });
  };

  return (
    <div className="App ">
      <div className="bg-red-700">
        <Header cart={cart} setIsShowCart={setIsShowCart} />
      </div>
      <div className="container md:mx-auto mx-1  my-4">
        <Filters
          products={products}
          setFilters={setFilters}
          setActivePrice={setActivePrice}
          activePrice={activePrice}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          activeMaterial={activeMaterial}
          setActiveMaterial={setActiveMaterial}
        />
      </div>

      <div className="flex flex-wrap my-4 container md:mx-auto mx-1">
        {filters.map((product) => (
          <Product
            handleAddToCart={handleAddToCart}
            key={product.id}
            product={product}
          />
        ))}
      </div>
      {isShowCart && (
        <Cart
          cart={cart}
          handleRemoveFromCart={handleRemoveFromCart}
          handleAddToCart={handleAddToCart}
          setIsShowCart={setIsShowCart}
        />
      )}

      {isLoading && (
        <div className="flex items-center justify-center">
          <Loading />
        </div>
      )}
    </div>
  );
}

export default Order