import React from 'react'
import { Outlet } from 'react-router-dom' 
import Header from './header'
import CartTab from './cartTab' 

const Layout = () => {
  return (
    <div className="min-h-screen">
      <main>
        <Header />
        <Outlet />
      </main>
      <CartTab />
    </div>
  );
  
}

export default Layout