import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import M9Page from './components/products/pages/M9Page';
import M8Page from './components/products/pages/M8Page';
import M7Page from './components/products/pages/M7Page';
import M6Page from './components/products/pages/M6Page';
import A9LPage from './components/products/pages/A9LPage';
import A8Page from './components/products/pages/A8Page';
import A8LPage from './components/products/pages/A8LPage';
import A7Page from './components/products/pages/A7Page';
import A7LPage from './components/products/pages/A7LPage';
import A7DPage from './components/products/pages/A7DPage';
import A6Page from './components/products/pages/A6Page';
import A6LPage from './components/products/pages/A6LPage';
import A5LPage from './components/products/pages/A5LPage';
import X8Page from './components/products/pages/X8Page';
import X8LPage from './components/products/pages/X8LPage';
import X7LPage from './components/products/pages/X7LPage';
import X6RPage from './components/products/pages/X6RPage';
import X6LPage from './components/products/pages/X6LPage';
import X5LPage from './components/products/pages/X5LPage';
import S200Page from './components/products/pages/S200Page';  
import S180XDPage from './components/products/pages/S180XDPage';
import S150Page from './components/products/pages/S150Page';
import STIL7Page from './components/products/pages/STIL7Page';
import STIL5Page from './components/products/pages/STIL5Page';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Products />
              <About />
              <Gallery />
              <Testimonials />
              <Contact />
            </>
          } />
          <Route path="/products" element={
            <div className="pt-20">
              <Products />
            </div>
          } />
          <Route path="/products/M9" element={<M9Page />} />
          <Route path="/products/M8" element={<M8Page />} />
          <Route path="/products/M7" element={<M7Page />} />
          <Route path="/products/M6" element={<M6Page />} />
          <Route path="/products/A9L" element={<A9LPage />} />
          <Route path="/products/A8" element={<A8Page />} />
          <Route path="/products/A8L" element={<A8LPage />} />
          <Route path="/products/A7" element={<A7Page />} />
          <Route path="/products/A7L" element={<A7LPage />} />
          <Route path="/products/A7D" element={<A7DPage />} />
          <Route path="/products/A6" element={<A6Page />} />
          <Route path="/products/A6L" element={<A6LPage />} />
          <Route path="/products/A5L" element={<A5LPage />} />
          <Route path="/products/X8" element={<X8Page />} />
          <Route path="/products/X8L" element={<X8LPage />} />
          <Route path="/products/X7L" element={<X7LPage />} />
          <Route path="/products/X6R" element={<X6RPage />} />
          <Route path="/products/X6L" element={<X6LPage />} />
          <Route path="/products/X5L" element={<X5LPage />} />
          <Route path="/products/S200" element={<S200Page />} />
          <Route path="/products/S180XD" element={<S180XDPage />} />
          <Route path="/products/S150" element={<S150Page />} />
          <Route path="/products/STIL7" element={<STIL7Page />} />
          <Route path="/products/STIL5" element={<STIL5Page />} />
          <Route path="/product/m9" element={<M9Page />} />
          <Route path="/product/m8" element={<M8Page />} />
          <Route path="/product/m7" element={<M7Page />} />
          <Route path="/product/m6" element={<M6Page />} />
          <Route path="/product/a9l" element={<A9LPage />} />
          <Route path="/product/a8" element={<A8Page />} />
          <Route path="/product/a8l" element={<A8LPage />} />
          <Route path="/product/a7" element={<A7Page />} />
          <Route path="/product/a7l" element={<A7LPage />} />
          <Route path="/product/a7d" element={<A7DPage />} />
          <Route path="/product/a6" element={<A6Page />} />
          <Route path="/product/a6l" element={<A6LPage />} />
          <Route path="/product/a5l" element={<A5LPage />} />
          <Route path="/product/x8" element={<X8Page />} />
          <Route path="/product/x8l" element={<X8LPage />} />
          <Route path="/product/x7l" element={<X7LPage />} />
          <Route path="/product/x6r" element={<X6RPage />} />
          <Route path="/product/x6l" element={<X6LPage />} />
          <Route path="/product/x5l" element={<X5LPage />} />
          <Route path="/product/s200" element={<S200Page />} />
          <Route path="/product/s180xd" element={<S180XDPage />} />
          <Route path="/product/s150" element={<S150Page />} />
          <Route path="/product/stil7" element={<STIL7Page />} />
          <Route path="/product/stil5" element={<STIL5Page />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;