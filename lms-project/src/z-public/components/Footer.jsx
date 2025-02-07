import React from "react";
import { Facebook, Instagram, Youtube, Phone } from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-neutral-800 text-white">
      <div
        id="social-media"
        className="flex justify-center items-center gap-2 p-4"
      >
        <a
          href=""
          className="bg-white rounded-full p-1 text-black hover:text-blue-600"
        >
          <Facebook size={19} />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          className="bg-white rounded-full p-1 text-black hover:text-blue-600"
        >
          <Instagram size={19} />
        </a>
        <a
          href=""
          className="bg-white rounded-full p-1 text-black hover:text-blue-600"
        >
          <Youtube size={19} />
        </a>
      </div>

      <div id="info" className="grid grid-cols-4">
        <div className="p-2">
          <h2 className="text-lg font-bold">Lms</h2>
          <p className="text-sm">
            <Phone className="inline-block h-4" />{" "}
            <span className="text-xs"> +33 6 12 34 56 78</span>
          </p>
        </div>
        <div className="flex justify-center">
          <ul className="space-y-1">
            <li className="text-sm">Produits</li>
            <li className="text-xs">Produits1</li>
            <li className="text-xs">Produits2</li>
            <li className="text-xs">Produits3</li>
          </ul>
        </div>
        <div className="flex justify-center">
          <ul className="space-y-1">
            <li className="text-sm">Produits</li>
            <li className="text-xs">Produits1</li>
            <li className="text-xs">Produits2</li>
            <li className="text-xs">Produits3</li>
          </ul>
        </div>
        <div className="flex justify-center p-2">
          <ul className="space-y-1">
            <li className="text-sm">Produits</li>
            <li className="text-xs">Produits1</li>
            <li className="text-xs">Produits2</li>
            <li className="text-xs">Produits3</li>
          </ul>
        </div>
      </div>

      <div id="copyright" className="flex justify-center p-2">
        <span className="text-xs">
          &copy; 2024 Tous droits reservés, powered by Tndev
        </span>
      </div>
    </div>
  );
};

export default Footer;
