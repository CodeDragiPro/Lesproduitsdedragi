import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { FaUser, FaShoppingBag, FaStream, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="p-4 flex justify-between items-center relative text-white">
     <div className='flex items-center'>
        <img src={logo} className='w-10' />
        <h1>Les produits de dragi</h1>
     </div>
     
      <div className="hidden md:flex space-x-4">
        <a href="#">Accueil</a>
        <a href="#">Produits</a>
        <a href="#">À propos</a>
        <a href="#">Contact</a>
        <a href="#">Connexion</a>
      </div>

      <div className="hidden md:flex text-white space-x-2">
        {/* <FaUser size={24} /> */}
        <FaShoppingBag size={24} />
      </div>

      <div className="md:hidden text-white" onClick={toggleMobileMenu}>
        <FaStream size={24} />
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-primary flex flex-col items-center justify-center">
          <div className="absolute top-0 right-0 mt-4 mr-4">
            <button onClick={toggleMobileMenu} className="focus:outline-none">
              <FaTimes size={32} />
            </button>
          </div>

          <div className="text-center space-y-4 flex flex-col items-center">
            <a href="#" className="block">Accueil</a>
            <a href="#" className="block">Produits</a>
            <a href="#" className="block">À propos</a>
            <a href="#" className="block">Contact</a>
            <a href="#" className="block">Connexion</a>
          </div>

          <div className="fixed bottom-0 mb-12 flex items-center justify-center space-x-2">
            {/* <FaUser size={24} /> */}
            <FaShoppingBag size={24} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
