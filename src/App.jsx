import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Blog from './pages/Blog/Blog';
import Contact from './pages/Contact/Contact';
import Auth from './pages/Auth/Auth';

function App() {
  return (
    <div className="w-full min-h-screen flex flex-col gap-2 ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        {['signin', 'signup'].map((path) => (
          <Route
            key={path}
            path={path}
            element={<Auth isLogin={path === 'sigmin'} />}
          />
        ))}
      </Routes>
    </div>
  );
}

export default App;
