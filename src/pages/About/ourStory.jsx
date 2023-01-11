 import React from "react"
 import hands from '../../assets/hands.jpg';
 
 
 const OurStory = ()=>
 {
    return(
      <>
      <div 
      className="flex justify-center items-center to-transparent h-1/2 w-100">
         <img className="w-1/2" src={hands}  alt=""/>
         </div>
      <section className="flex flex-col">
  
     <div className="px-40 mx-40 pb-20">
     <h2 className="text-5xl xl:text-6xl font-extrabold text-darkBlue mb-4 text-center">
         Our Story
       </h2>
         <p className="text-center px-15 mx-15 font-medium  text-xl max-w-screen">
         RefuBook is a website dedicated to helping refugees navigate their new surroundings and feel connected to their community. We offer a platform for sharing knowledge and experiences, and strive to be a comprehensive and reliable source of information. Thank you for visiting and we hope you find the resources here helpful in your journey as a refugee.
         </p>
     </div>
 
 </section>
 </>
);
  }
  export default OurStory;
