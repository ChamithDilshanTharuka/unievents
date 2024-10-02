import React from 'react';
import './styles/main.css';
import Header from './components/Header';
import Footer from './components/Footer';
import TopSection from './components/TopSection'
import Events  from './components/Events';


function App() {
  return (
    <div className="App">
      <Header/>
      <TopSection/>
      <Events/>
      <Footer/>
    </div>
  );
}

export default App;
