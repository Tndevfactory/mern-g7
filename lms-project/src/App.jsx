import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// z-public
import Home from "./z-public/pages/Home";
import Contact from "./z-public/pages/Contact";
import Exercice from "./z-public/pages/Exercice";
import Dataset from "./z-public/pages/Dataset";
import Dashboard from "./z-public/pages/Dashboard";
import CalendarDash from "./z-public/pages/CalendarDash";
import Posts from "./z-public/pages/Posts";
import ManageUsers from "./z-public/pages/ManageUsers";
import User from "./z-public/pages/User";

// z-auth
import Signup from "./z-auth/pages/Signup";
import Signin from "./z-auth/pages/Signin";

// layouts
import PublicLayout from "./layouts/PublicLayout";
import AuthLayout from "./layouts/AuthLayout";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="exo" element={<Exercice />} />
          <Route path="dataset" element={<Dataset />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="calendar" element={<CalendarDash />} />
          <Route path="posts" element={<Posts />} />
          <Route path="manage-users" element={<ManageUsers />} />
          <Route path="user" element={<User />} />
        </Route>
        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<Signin />} />
          <Route path="sign-up" element={<Signup />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
