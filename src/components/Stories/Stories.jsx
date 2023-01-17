import React from 'react';

const  Stories=()=> {
  return (
    <section
      className="bg-refubookBlue flex flex-col justify-start md:justify-center "
    >
      <h1 className="mt-20 ml-28 pl-10 pt-20 text-6xl text-refubookWhite ">
        Latest Stories
      </h1>
      <p className="mt-7 mb-20 ml-28 pl-12 text-refubookWhite text-xl">
        Home is behind, the world ahead and there are many <br />
        paths to tread through shadows to the edge.
      </p>
    
      <div className="flex flex-col  justify-start pb-20 md:flex-row md:justify-around ">
        <img
          src="https://rare-gallery.com/mocahbig/44275-404-Not-Found-Black-amp-White-MinimalistError-HD.jpg"
          alt=''
          className="rounded-3xl w-full md:w-1/3"
        />
        <div className="flex flex-col pt-4 w-full  md:w-1/3">
          <span className=" w-fit text-center p-1 rounded  bg-refubookYellow  text-refubookGray font-bold md:w-1/4 ">
          Languages
          </span >
          <h1 className="mt-5 mb-10 text-4xl text-refubookWhite font-light  ">
          How I learned Turkish quickly and what are the best places to learn.
          </h1>
          <div className="flex">
            <div className=" rounded-full w-10 h-10 bg bg-refubookYellow  "/>
            <div className="flex flex-col ml-10 ">
              <p className="text-refubookWhite font-bold ">Rami Al-Khaldi</p>
              <p className="text-refubookWhite font-light">Refugee in Turkey</p>
            </div>
          </div>
        </div>
      </div>
      <div className="  flex flex-col  justify-start pb-20 md:flex-row md:justify-around ">
        <img
       
          src="https://rare-gallery.com/mocahbig/44275-404-Not-Found-Black-amp-White-MinimalistError-HD.jpg"
          alt=''
          className="rounded-3xl w-full md:w-1/3 sm:w-1/4"
        />
        <div className="flex flex-col pt-4 w-full  md:w-1/3">
          <span className="w-fit text-center p-1 rounded  bg-refubookYellow  text-refubookGray font-bold  md:w-1/4">
            Jobs
          </span>
          <h1 className="mt-5 mb-10 text-4xl text-refubookWhite font-light ">
          How to find job in Lebanon, and what are the obstacles in Lebanon.
          </h1>
          <div className="flex">
            <div className=" rounded-full w-10 h-10 bg-refubookYellow "/>
            <div className="flex flex-col ml-10">
              <p className="text-refubookWhite font-bold ">Ahmad Fesal</p>
              <p className="text-refubookWhite font-light">Refugee in Lebanon</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stories;