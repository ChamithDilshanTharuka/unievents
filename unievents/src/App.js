import React from 'react';
import './styles/main.css';
import useVendorLibraries from './hooks/useVendorLibraries';
import Header from './components/Header';
import Footer from './components/Footer';
import TopSection from './components/TopSection'
import Events  from './components/Events';
import Stats from './components/Stats';
import JoinUs from './components/JoinUs';
import Gallery from './components/Gallery';
import Faq from './components/Faq';
import AboutUs from './AboutUs';



function App() {
  useVendorLibraries();
  return (
    <div className="App">
      <Header/>
      <TopSection/>
      <AboutUs/>
      <Events/>
      <Stats/>
      <JoinUs/>
      <Gallery/>
      <Faq/>
      <Footer/>
    </div>
  );
}

export default App;
