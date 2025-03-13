import React from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Main from './Components/Main';


function App() {
  return (
    <div className="app-container">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
