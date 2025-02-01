import React from "react";
import { Apple, LogIn } from "lucide-react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-12 px-2 bg-gray-200">
      <div id="left">
        <img src={logo} alt="logo" className="w-10 h-10 inline-block" />
        LMS
      </div>
      <div id="right" className="space-x-1 text-sm">
        <Link to="/" className=" hover:text-blue-500">
          Accueil
        </Link>
        <a href="" className=" hover:text-blue-500">
          Produits
        </a>
        <a href="" className=" hover:text-blue-500">
          Services
        </a>
        <Link to="/contact" className=" hover:text-blue-500">
          Contact
        </Link>
        <Link to="/auth" title="Se connecter" className=" hover:text-blue-500">
          <LogIn className="inline-block" size="18" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
