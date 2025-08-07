import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Menu from "./pages/Menu/Menu";
import OrderSuccess from "./pages/OrderSuccess/OrderSuccess";
import Contact from "./pages/Contact/Contact";
import { CartProvider } from "./context/CartContext";

const App = () => {
  return (
    <CartProvider>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/place-order" element={<PlaceOrder />} />
          <Route path="/order-success" element={<OrderSuccess />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </CartProvider>
  );
};

export default App;
