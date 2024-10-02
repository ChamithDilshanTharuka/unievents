import React from 'react';
import './styles/main.css';
import useVendorLibraries from './hooks/useVendorLibraries';
import Header from './components/Header';
import Footer from './components/Footer';
import TopSection from './components/TopSection'
import Events  from './components/Events';
import Stats from './components/Stats';



function App() {
  useVendorLibraries();
  return (
    <div className="App">
      <Header/>
      <TopSection/>
      <Events/>
      <Stats/>
      <Footer/>
    </div>
  );
}

export default App;
