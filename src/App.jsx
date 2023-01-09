import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { About, Auth, Blog, Contact, Home, UserProfile } from './pages';
import { Footer, Header } from './components';

function App() {
  return (
    <div className="w-full  min-h-screen flex flex-col gap-2 ">
      <Header />
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
        <Route path="profile" element={<UserProfile />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
