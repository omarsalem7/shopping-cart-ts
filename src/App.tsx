import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { useState } from 'react';
import NavBar from './components/nav';
import Home from './pages/home';
import About from './pages/about';
import NoPage from './pages/noPage';
import Store from './pages/store';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([
    { id: 1, quantity: 5 },
    { id: 3, quantity: 6 },
  ]);
  const increaseQuantity = (id: number) => {
    setCartItems((currentItems) => {
      if (currentItems.find((item) => item.id === id) == null) {
        return [...currentItems, { id, quantity: 1 }];
      } else {
        return cartItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const decreaseQuantity = (id: number) => {
    setCartItems((currentItems) => {
      if (currentItems.find((item) => item.id === id)?.quantity === 1) {
        return currentItems.filter((item) => item.id !== id);
      } else {
        return cartItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  return (
    <>
      <BrowserRouter>
        <NavBar items={cartItems} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/store"
            element={
              <Store
                increase={increaseQuantity}
                decrease={decreaseQuantity}
                cartItems={cartItems}
              />
            }
          />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
