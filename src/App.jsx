import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { About, Auth, Blog, Contact, Home } from './pages';

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
            element={<Auth isLogin={path === 'signin'} />}
          />
        ))}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
