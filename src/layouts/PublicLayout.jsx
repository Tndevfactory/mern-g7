import React from "react";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Navbar from "../z-public/components/Navbar";
import Footer from "../z-public/components/Footer";

const PublicLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
      <Toaster />
    </div>
  );
};

export default PublicLayout;
