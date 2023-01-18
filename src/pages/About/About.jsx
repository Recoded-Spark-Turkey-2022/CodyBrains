import React from 'react';

import OurStory from '../../components/OurStory/OurStory';
import OurTeam from '../../components/OurTeam/OurTeam';
import Testimonials from '../../components/Testimonials/Testimonials';
import Partners from '../../components/Partners/Partners';
import SignUp from '../../components/SignupPart/Signuppart';

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
