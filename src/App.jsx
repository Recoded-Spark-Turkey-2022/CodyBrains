import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Blog from './pages/Blog/Blog';

function App() {
  return (
    
    <>
      <Navbar />
      <Home />
      <About />
      <Contact />
      <Blog />
    </>
    
  );
}

export default App;
