import React from 'react';
import './styles/main.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import useVendorLibraries from './hooks/useVendorLibraries';
import Header from './components/Header';
import Footer from './components/Footer';
import TopSection from './components/TopSection';
import Events from './components/Events';
import Stats from './components/Stats';
import JoinUs from './components/JoinUs';
import Gallery from './components/Gallery';
import Faq from './components/Faq';
import AboutUs from './AboutUs';

function App() {
  useVendorLibraries();
  
  return (
    <Router>
      <div className="App">
        <Header />
        
        {/* Main Routes */}
        <Routes>
          {/* Home Route */}
          <Route path='/' 
            element={
              <>
                <TopSection />
                <Events />
                <Stats />
                <JoinUs />
                <Gallery />
              </>
            }
          />
          
          {/* About Us Route */}
          <Route path='/about-us' 
            element={<AboutUs />}
          />
        </Routes>
        <Faq />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
