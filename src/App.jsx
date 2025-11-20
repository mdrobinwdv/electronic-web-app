import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import ProductCart from './ProductCart';
import Searchbar from './Searchbar';
import Section1 from './Section1';
import { useState } from 'react';

function Layout({ cart, setCart }) {
  const location = useLocation();

  if (location.pathname === "/products") {
    return <ProductCart cart={cart} setCart={setCart} />;
  }

  return (
    <>
      <Searchbar cart={cart} setCart={setCart} />
      <Section1 />
    </>
  );
}

function App() {
  const [cart, setCart] = useState([]);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/*" element={<Layout cart={cart} setCart={setCart} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
