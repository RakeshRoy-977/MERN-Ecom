import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Page/HomePage";
import Shop from "./Page/Shop";
import Contact from "./Page/Contact";
import Blog from "./Page/Blog";
import Login from "./Page/Login";
import Signup from "./Page/Signup";
import NotFound404 from "./Page/NotFound404";
import Admin from "./Admin/Admin";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
