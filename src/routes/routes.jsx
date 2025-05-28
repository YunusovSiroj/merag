import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home/Home';
import Futter from '../components/futter/futter';
import About from '../components/about/about';
import Projectss from '../components/Projectss/Projectss';
import Engineering from '../components/Engineering/Engineering';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Futter" element={<Futter />} />
      <Route path="/About" element={<About />} />
      <Route path="/Projectss" element={<Projectss />} />
      <Route path="/Engineering" element={<Engineering />} />
      
    </Routes>
  );
}
