import React from 'react';

import OurStory from './OurStory';
import OurTeam from './OurTeam';
import Testimonials from '../../components/Testimonials/Testimonials';
import Partners from '../../components/Partners/Partners';
import SignUp from './Signuppart';


const About=()=> {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
    <OurStory />
    <OurTeam />
    <Testimonials />
    <Partners />
    <SignUp />
  </div>
  );
}

export default About;
