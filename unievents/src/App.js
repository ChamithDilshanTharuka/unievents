import React from 'react';
import './styles/main.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import useVendorLibraries from './hooks/useVendorLibraries';
import Header from './components/Header';
import Footer from './components/Footer';
import TopSection from './components/TopSection';
import Events from './components/Events';
import Stats from './components/Stats';
import JoinUs from './components/JoinUs';
import Gallery from './components/Gallery';
import Faq from './components/Faq';
import AboutUs from './components/AboutUs';
import { ContactUs } from './components/ContactUs';
import CallUs from './components/CallUs';
import { EventDetails } from './components/EventDetails';
import { Login } from './components/Login';
import { Signup } from './components/Signup';
import AdminEvents from './components/AdminEvents';

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
                <Gallery />
              </>
            }
          />

          {/* Events Route */}
          <Route path='/events'
            element={
              <Events />
            }
          />

          {/* Event Details Route */}
          <Route path='/event-details'
            element={
              <EventDetails />
            }
          />

          {/* Events Route */}
          <Route path='/gallery'
            element={
              <Gallery />
            }
          />


          {/* About Us Route */}
          <Route path='/about-us'
            element={
              <>
                <AboutUs />
                <CallUs />
              </>
            }
          />

          {/* Contact Us Route */}
          <Route path='/contact-us'
            element={<ContactUs />}
          />

          {/* Login Route */}
          <Route path='/login'
            element={<Login />}
          />

          {/* Signup Route */}
          <Route path='/signup'
            element={<Signup />}
          />

          {/* Admin Events Route */}
          <Route path='/admin-events'
            element={
              <ProtectedRoute>
                <AdminEvents />
              </ProtectedRoute>}

          />
        </Routes>

        <Faq />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
