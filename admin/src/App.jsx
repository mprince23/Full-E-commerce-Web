import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Add from "./pages/Add";
import List from "./pages/List";
import Orders from "./pages/Orders";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ToastContainer />
        <Navbar />
        <hr />

        <div className="flex max-padd-container ">
          <Sidebar />
          <Routes>
            <Route path="/add-product" element={<Add />} />
            <Route path="/product-list" element={<List />} />
            <Route path="/product-order" element={<Orders />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
