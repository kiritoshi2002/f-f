import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Layout from './components/layout';
import Home from './pages/home';
import Detail from './pages/detail';
import Checkout from './pages/checkout';
import Header from './components/header';

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
        </Route>
      </Routes>
    </Router>
  );
}

export default App;