import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter } from "react-router-dom";
import Menu from './components/Menu/Menu';
import MainBlock from './components/MainBlock/MainBlock';
import PopularSection from './components/PopularSection/PopularSection';
import ActualSection from './components/ActualSection/ActualSection';
import KnowMoreSection from './components/KnowMoreSection/KnowMoreSection';
import WideCarousel from './components/WideCarousel/WideCarousel';
import SeoMenu from './components/SeoMenu/SeoMenu';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header />
        <Menu />
        <MainBlock />
        <PopularSection />
        <ActualSection />
        <KnowMoreSection />
        <WideCarousel />
        <SeoMenu />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
