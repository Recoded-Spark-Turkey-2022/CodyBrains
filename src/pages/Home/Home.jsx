import React from 'react';
import Features from '../../components/Features/Features';
import Testimonials from '../../components/Testimonials/Testimonials';
import Partners from '../../components/Partners/Partners';
import Hero from '../../components/Hero/Hero';

function Home() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <Hero />
      <Features />
      <Testimonials />
      <Partners />
    </div>
  );
}

export default Home;
