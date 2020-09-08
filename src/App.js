import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollTop from './components/ScrollTop/ScrollTop';
import Home from './components/Sections/Home/Home';
import Icons from './components/Sections/Icons/Icons';
import Illustrations from './components/Sections/Illlustrations/Illustrations';
import Fonts from './components/Sections/Fonts/Fonts';
import Inspirations from './components/Sections/Inspirations/Inspirations';
import ImageOptimization from './components/Sections/ImagesOptimization/ImagesOptimization';
import NavBar from './components/NavBar/NavBar';
import ColorsTools from './components/Sections/ColorsTools/ColorsTools';

import './Global/Styles/main.css';

const App = () => {
  return (
    <BrowserRouter>
    <NavBar />
    <ScrollTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/icons" element={<Icons />} />
        <Route path="/category/illustrations" element={<Illustrations />} />
        <Route path="/category/fonts" element={<Fonts />} />
        <Route path="/category/inspirations" element={<Inspirations />} />
        <Route path="/category/imagesoptimization" element={<ImageOptimization />} />
        <Route path="/category/colorstools" element={<ColorsTools />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
