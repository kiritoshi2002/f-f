import React from 'react';
import { Outlet } from 'react-router-dom'; 
import { useSelector } from 'react-redux'
import CartTab from './cartTab';
import Filter from './filter';

const Layout = () => {
  const statusTabCart = useSelector(store => store.cart.statusTab);
  const statusFilterbar = useSelector(store => store.cart.statusFilter);
  return (
    
    <div>
    <main
        className={`max-w-full m-auto p-5 transform transition-transform duration-500 ${
          statusTabCart ? '-translate-x-56' : statusFilterbar ? 'translate-x-56' : ''
        }`}
      >
        <Outlet />
      </main>
      <Filter />
      <CartTab />
    </div>
  );
}

export default Layout;
