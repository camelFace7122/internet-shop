import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import MainBlock from './components/MainBlock/MainBlock';
import PopularSection from './components/PopularSection/PopularSection';
import ActualSection from './components/ActualSection/ActualSection';
import KnowMoreSection from './components/KnowMoreSection/KnowMoreSection';
import WideCarousel from './components/WideCarousel/WideCarousel';
import SeoMenu from './components/SeoMenu/SeoMenu';
import Footer from './components/Footer/Footer';
import Widgets from './components/Widgets/Widgets';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Menu />
      <MainBlock />
      <PopularSection />
      <ActualSection />
      <KnowMoreSection />
      <WideCarousel />
      <SeoMenu />
      <Widgets />
      <Footer />
    </React.Fragment>
  );
}

export default App;
