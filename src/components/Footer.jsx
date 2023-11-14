import React from "react";
import logo from "../assets/logo.png";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import logocodedragi from "../assets/logoCodeDragi.png";

const Footer = () => {
  const linksData = {
    products: [
      { label: "Vêtements", url: "/" },
      { label: "Confiseries", url: "/" },
      { label: "Chaussures", url: "/" },
      { label: "Parfums", url: "/" },
      { label: "Maquillage", url: "/" },
    ],
    usefulLinks: [
      { label: "Accueil", url: "/" },
      { label: "Produits", url: "/produits" },
      { label: "A propos", url: "/apropos" },
      { label: "Contact", url: "/contact" },
    ],
  };

  const generateListItems = (links) => (
    <ul>
      {links.map((link, index) => (
        <li key={index}>
          <a href={link.url}>{link.label}</a>
        </li>
      ))}
    </ul>
  );

  const DesktopContent = () => (
    <div className="hidden md:flex justify-between">
      <div>
        <a href="/" className="flex items-center">
          <img src={logo} className="w-10" alt="Logo" />
          <h1>Dragi</h1>
        </a>
      </div>
      <div>
        <h2 className="font-semibold mb-2">Nos Produits</h2>
        {generateListItems(linksData.products)}
      </div>
      <div>
        <h2 className="font-semibold mb-2">Liens utiles</h2>
        {generateListItems(linksData.usefulLinks)}
      </div>
      <div>
        <h2 className="font-semibold mb-2">Suivez-nous</h2>
        <div className="flex justify-between animate-bounce">
          <a href="#">
            <FaFacebook size={24} />
          </a>
          <a href="#">
            <FaTwitter size={24} />
          </a>
          <a href="#">
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </div>
  );

  const MobileContent = () => (
    <div className="md:hidden mt-4">
      <div>
        <a href="/" className="flex items-center justify-center">
          <img src={logo} className="w-10" alt="Logo" />
          <h1>Dragi</h1>
        </a>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-semibold mt-4 mb-2">Nos produits</h2>
          {generateListItems(linksData.products)}
        </div>
        <div>
          <h2 className="font-semibold  mb-2">Liens utiles</h2>
          {generateListItems(linksData.usefulLinks)}
        </div>
      </div>
      <div className="flex justify-center items-center text-center">
        <div>
          <h2 className="font-semibold mt-4 mb-2">Suivez-nous</h2>
          <div className="flex justify-between animate-bounce">
          <a href="#">
            <FaFacebook size={24} />
          </a>
          <a href="#">
            <FaTwitter size={24} />
          </a>
          <a href="#">
            <FaInstagram size={24} />
          </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center text-center mt-8">
        <div>
          <img
            src={logocodedragi}
            className="w-36 mx-auto"
            alt="Codedragi Logo"
          />
          <p>&copy; Codedragi - 2024</p>
        </div>
      </div>
    </div>
  );

  return (
    <footer className="bg-primary text-white mt-8">
      <div className="container mx-auto p-4">
        <DesktopContent />
        <MobileContent />
      </div>
    </footer>
  );
};

export default Footer;
