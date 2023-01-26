import React from 'react';
import {
  OurStory,
  OurTeam,
  Testimonials,
  Partners,
  SignUp,
} from '../../components';

const About = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <OurStory />
      <OurTeam />
      <Testimonials />
      <Partners />
      <SignUp />
    </div>
  );
};

export default About;
