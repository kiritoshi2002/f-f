import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Layout from './components/layout';
import Home from './pages/home';
import Detail from './pages/detail';
import Checkout from './pages/checkout';
import Header from './components/header';
import Payment from './pages/payment';
import About from './pages/about';
import Contact from './pages/contact';

function App() {
  return (
    <Router>
      <ScrollToTop /> 
      <Header />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/:slug' element={<Detail />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/payment' element={<Payment />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;