import React from "react"
import Navbar from "./components/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Products from './pages/Products';
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <div className="px-8">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/produits" element={<Products/>}/>
      </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
