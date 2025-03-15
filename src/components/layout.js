import React, { useState, createContext } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import CartTab from "./cartTab";
import Filter from "./filter";
import Header from "../components/header";

// ✅ Create Context for query state
export const QueryContext = createContext();

const Layout = () => {
  const [query, setQuery] = useState("");
  const statusTabCart = useSelector((store) => store.cart.statusTab);
  const statusFilterbar = useSelector((store) => store.cart.statusFilter);

  return (
    
    <QueryContext.Provider value={{ query, setQuery }}>
      <div>
        <Header query={query} setQuery={setQuery} />
        <main
          className={`max-w-full m-auto p-5 transform transition-transform duration-500 ${
            statusTabCart
              ? "-translate-x-56"
              : statusFilterbar
              ? "translate-x-56"
              : ""
          }`}
        >
          <Outlet />
        </main>
        <Filter />
        <CartTab />
      </div>
    </QueryContext.Provider>
  );
};

export default Layout;
