import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Contact, Faq, Introdution, Login, Register, Cursos} from "../screens";
import { UserProvider } from "../hooks/UserContext";

const AppRoutes = () => {
  return (
    <Router>
      <UserProvider>
      <Routes>
        <Route  path="/home" element={<Introdution />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Login />} />
        <Route path="/cadastrar" element={<Register />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/curso/:id" element={<Cursos/>} />
      </Routes>
      </UserProvider>
    </Router>
  );
};


export default AppRoutes;
