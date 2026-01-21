import { useState, useEffect } from 'react';

import ProductList from './components/ProductList.jsx';
import Cart from './components/Cart.jsx';
import ConfirmationModal from './components/ConfirmationModal.jsx';

function App() {
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addToCart = (itemToAdd) => {
    const existingItemm = cart.find((item) => item.id === itemToAdd.id);

    if (existingItemm) {
      setCart(
        cart.map((item) =>
          item.id === itemToAdd.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...itemToAdd, quantity: 1 }]);
    }
  }

  const incrementItem = (itemId) => {
    setCart(
      cart.map((item) =>
        item.id === itemId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decrementItem = (itemId) => {
    const existingItem = cart.find((item) => item.id === itemId);

    if (existingItem.quantity === 1) {
      removeFromCart(itemId);
    } else {
      setCart(
        cart.map((item) =>
          item.id == itemId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    }
  };

  const removeFromCart = (itemId) => {
    setCart(cart.filter((item) => item.id !== itemId));
  };

  const handlerConfirmOrder = () => {
    setIsModalOpen(true);
  }

  const startNewOrder = () => {
    setIsModalOpen(false);
    setCart([]);
  }

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isModalOpen]);

  return (
    <main className='max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-x-8 px-6 py-12 md:px-10'>
      {/* product list */}
      <section className='lg:col-span-2 mb-8 lg:mb-0'>
        <ProductList cart={cart} onAddToCart={addToCart} onIncrement={incrementItem} onDecrement={decrementItem} />
      </section>

      {/* cart */}
      <section className='mb-12 lg:mb-0'>
        <Cart cart={cart} onRemove={removeFromCart} onConfirmOrder={handlerConfirmOrder} />
      </section>

      <footer className='lg:col-span-3 text-center text-sm text-rose-500 mt-8'>
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" className='text-red font-bold hover:underline'>
          Frontend Mentor
        </a>
        . Coded by <a href="#" className='text-red font-bold hover:underline'>Gbollybambam</a>.
      </footer>

      {isModalOpen && (
        <ConfirmationModal cart={cart} onStartNewOrder={startNewOrder} />
      )}
    </main>
  )
};

export default App;