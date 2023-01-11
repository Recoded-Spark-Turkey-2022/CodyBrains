 import React from "react"
 import hands from '../../assets/hands.jpg';
 
 
 const OurStory = ()=>
 {
    return(
      <>
      <div 
      className="flex justify-center items-center to-transparent h-1/2 w-100 scale-75 ">
         <img src={hands}  alt=""/>
         </div>
      <section className="flex flex-col">
  
     <div className="px-40 mx-40 pb-20">
     <h2 className="text-5xl xl:text-6xl font-extrabold text-darkBlue mb-4 text-center">
         Our Story
       </h2>
         <p className="text-center px-15 mx-15 font-medium  text-xl max-w-screen">
           It is a long established fact that a reader will be distracted by
           the readable content of a page when looking at its layout. The point
           of using Lorem Ipsum is that it has a more-or-less normal
           distribution of letters, as opposed to using `Content here, content
           here`, making it look like readable English.
         </p>
     </div>
 
 </section>
 </>
);
  }
  export default OurStory;
