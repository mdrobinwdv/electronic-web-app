import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import ProductCart from './ProductCart';
import Searchbar from './Searchbar';
import Section1 from './Section1';
import { useState, useRef, useEffect } from 'react';
import Footer from './Footer';

function Layout({ cart, setCart, setActive }) {
  const homeRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (entry.target.id === "home") setActive("Home");
            if (entry.target.id === "about") setActive("About Me");
          }
        });
      },
      { threshold: 0.3 }
    );

    if (homeRef.current) observer.observe(homeRef.current);
    if (footerRef.current) observer.observe(footerRef.current);

    return () => {
      if (homeRef.current) observer.unobserve(homeRef.current);
      if (footerRef.current) observer.unobserve(footerRef.current);
    };
  }, []);

  return (
    <>
      <div ref={homeRef} id="home">
        <Searchbar cart={cart} setCart={setCart} />
        <Section1 />
      </div>
      <Footer ref={footerRef} id="about" />
    </>
  );
}

function App() {
  const [cart, setCart] = useState([]);
  const [active, setActive] = useState("Home");

  return (
    <BrowserRouter>
      <Navbar active={active} setActive={setActive} />
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              cart={cart}
              setCart={setCart}
              setActive={setActive}
            />
          }
        />
        <Route
          path="/products"
          element={<ProductCart cart={cart} setCart={setCart} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
