import React from 'react';

import OurStory from './ourStory';
import ShareStory from './shareStory';


const About=()=> {
  return (
    <section name="story" className="flex flex-col h-screen">
      <div name="story" className="max-w-screen h-1/2">
        <h2 className="text-5xl xl:text-6xl font-extrabold text-refubookBlue mb-4 text-center">
          Our Story
        </h2>
        <div className="px-20 mx-20 pb-20">
          <p className="text-center px-15 mx-15 font-medium  text-xl max-w-screen">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using `Content here, content
            here`, making it look like readable English.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
