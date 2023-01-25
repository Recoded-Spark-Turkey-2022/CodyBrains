import React from 'react';
import { useTranslation } from 'react-i18next';

const Stories = () => {
  const { t } = useTranslation();

  const storiesData = [
    {
      id: 1,
      author: t('Rami_Al-Khaldi'),
      title: t('Stories_Rami_Title'),
      authorRole: t('Stories_Rami_Role'),
      category: t('Stories_Rami_Category'),
      image:
        'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: 2,
      author: t('Ahmad_Fesal'),
      title: t('Stories_Ahmad_Title'),
      authorRole: t('Stories_Ahmad_Role'),
      category: t('Stories_Ahmad_Category'),
      image:
        'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
  ];
  return (
    <section className="bg-refubookBlue w-full p-4">
    <div className="max-w-6xl mx-auto  flex flex-col lg:justify-start justify-center px-10 py-4 gap-5 mt-5 ">
      <h1 className="  lg:text-3xl text-xl text-center md:text-left text-refubookWhite ">
        Latest Stories
      </h1>
      <p className=" text-refubookWhite   md:text-left text-md lg:text-xl text-center mb-6 ">
        Home is behind, the world ahead and there are many <br />
        paths to tread through shadows to the edge.
      </p>
      {storiesData.map((item) => {
        return (
          <div
            className="flex flex-col justify-start pb-10 md:flex-row md:justify-between "
            key={item.id}
          >
            <img
              src={item.image}
              alt=""
              className="rounded-md  object-cover max-w-md "
            />
            <div className="flex flex-col pt-4 w-full mt-5 md:w-1/3">
              <span className=" w-fit text-center p-1 rounded  bg-refubookYellow  text-refubookGray font-bold  ">
                {item.category}
              </span>
              <h1 className="mt-5 mb-10 lg:text-4xl text-2xl text-refubookWhite font-light  ">
                {t(item.title)}
              </h1>
              <div className="flex">
                <div className=" rounded-full w-10 h-10 bg bg-refubookYellow  " />
                <div className="flex flex-col ml-10 ">
                  <p className="text-refubookWhite font-bold ">
                    {item.author}
                  </p>
                  <p className="text-refubookWhite font-light">
                    {item.authorRole}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </section>
  );
}
export default Stories;