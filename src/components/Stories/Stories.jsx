import React from 'react';

const Stories = () => {
  const data = [
    {
      id: 1,
      title:
        'How I learned Turkish quickly and what are the best places to learn.',
      author: 'Rami Al-Khaldi',
      authorRole: 'Refugee in Turkey',
      category: 'Languages',
      image:
        'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: 2,
      title:
        'How to find job in Lebanon, and what are the obstacles in Lebanon.',
      author: 'Ahmad Fesal',
      authorRole: 'Refugee in Lebanon',
      category: 'Jobs',
      image:
        'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
  ];
  return (
    <section className="bg-refubookBlue flex flex-col lg:justify-start justify-center p-6 gap-5 mt-5">
      <h1 className=" lg:pl-28 lg:text-3xl text-xl text-center lg:text-left text-refubookWhite ">
        Latest Stories
      </h1>
      <p className=" text-refubookWhite lg:pl-28  lg:text-left text-md lg:text-xl text-center ">
        Home is behind, the world ahead and there are many <br />
        paths to tread through shadows to the edge.
      </p>
      {data.map((item) => {
        return (
          <div
            className="flex flex-col justify-start pb-10 md:flex-row md:justify-around "
            key={item.id}
          >
            <img
              src={item.image}
              alt=""
              className="rounded-md  md:w-1/3"
            />
            <div className="flex flex-col pt-4 w-full mt-5 md:w-1/3">
              <span className=" w-fit text-center p-1 rounded  bg-refubookYellow  text-refubookGray font-bold  ">
                {item.category}
              </span>
              <h1 className="mt-5 mb-10 lg:text-4xl text-2xl text-refubookWhite font-light  ">
                {item.title}
              </h1>
              <div className="flex">
                <div className=" rounded-full w-10 h-10 bg bg-refubookYellow  " />
                <div className="flex flex-col ml-10 ">
                  <p className="text-refubookWhite font-bold ">{item.author}</p>
                  <p className="text-refubookWhite font-light">
                    {item.authorRole}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Stories;