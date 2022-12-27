import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Blog from './pages/Blog/Blog';
import Contact from './pages/Contact/Contact';
import Register from './pages/Register/Register';

function App() {
  return (
    <div className="w-full min-h-screen flex flex-col gap-2 ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        {['login', 'register'].map((path) => (
          <Route
            key={path}
            path={path}
            element={<Register isLogin={path === 'login'} />}
          />
        ))}
      </Routes>
    </div>
  );
}

export default App;
