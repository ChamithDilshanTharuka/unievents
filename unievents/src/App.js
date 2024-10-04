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
import { ContactUs } from './ContactUs';
import CallUs from './components/CallUs';
import { EventDetails } from './components/EventDetails';
import { Login } from './Login';
import { Signup } from './Signup';

function App() {
  useVendorLibraries();
  
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>

          {/* Home Route */}
          <Route path='/' 
            element={
              <>
                <TopSection />
                <Events />
                <Stats />
                <JoinUs />
                <Gallery/>
              </>
            }
          />

          {/* Events Route */}
          <Route path='/events'
           element={
            <Events/>
          }
          />

          {/* Events Details Route */}
          <Route path='/event-details'
           element={
            <EventDetails/>
          }
          />

          {/* Events Route */}
          <Route path='/gallery'
           element={
            <Gallery/>
          }
          />

          
          {/* About Us Route */}
          <Route path='/about-us' 
            element={
              <>
                <AboutUs />
                <CallUs/>
              </>
            } 
          />

          {/* Contact Us Route */}
          <Route path='/contact-us'
           element={<ContactUs/>}
           />

          {/* Login Route */}
          <Route path='/login'
           element={<Login/>}
           />

          {/* Signup Route */}
          <Route path='/signup'
           element={<Signup/>}
           />
        </Routes>

        <Faq />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
