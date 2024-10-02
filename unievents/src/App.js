import React from 'react';
import './styles/main.css';
import Header from './components/Header';
import Footer from './components/Footer';
import TopSection from './components/TopSection'


function App() {
  return (
    <div className="App">
      <Header/>
      <TopSection/>
      <Footer/>
    </div>
  );
}

export default App;
