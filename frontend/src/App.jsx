import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Error404 from "./components/Error404";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import { loadUser } from './features/authSlice'; // Import loadUser action

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser()); // Dispatch loadUser on component mount
  }, [dispatch]);

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
        <Toaster position="bottom-left" reverseOrder={false} />
      </BrowserRouter>
    </>
  );
}

export default App;
