import React from 'react';
import { Outlet } from 'react-router-dom'; 
// import Header from './header';
import { useSelector } from 'react-redux'
import CartTab from './cartTab';
import Filter from './filter';

const Layout = () => {
  const statusTabCart = useSelector(store => store.cart.statusTab);
  return (
    
    <div>
    <main className={` max-w-full m-auto p-5 transform transition-transform duration-500
    ${statusTabCart === false ? "" : "-translate-x-56" }`}>
        <Outlet />
      </main>
      <Filter />
      <CartTab />
    </div>
  );
}

export default Layout;
