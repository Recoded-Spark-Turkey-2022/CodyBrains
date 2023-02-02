import { collection, getDocs } from '@firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { db } from '../../services/firebase.config';
import avatar from '../../assets/avatar.png';

const Stories = () => {
  const { t } = useTranslation();

  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const getBlogs = async () => {
      const querySnapshot = await getDocs(collection(db, 'blogs'));
      const blogs = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBlogPosts(blogs);
    };
    getBlogs();
  }, []);

  const defaultImageUrl =
    'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';

  const onlyTwoStories = blogPosts.slice(0, 2);
  return (
    <section className="bg-refubookBlue w-full p-4">
      <div className="max-w-6xl mx-auto  flex flex-col lg:justify-start justify-center px-10 py-4 gap-5 mt-5 ">
        <h1 className="  lg:text-3xl text-xl rtl:text-right text-center md:text-left text-refubookWhite ">
          {t('Latest_Stories')}
        </h1>
        <p className=" text-refubookWhite rtl:text-right md:text-left text-md lg:text-xl text-center mb-6 ">
          {t('Latest_Stories_Text')}
        </p>
        {onlyTwoStories.map((item) => {
          return (
            <div
              className="flex flex-col justify-start pb-10 md:flex-row md:justify-between "
              key={item.id}
            >
              <Link to={`/blog/${item.id}`} className="max-w-sm">
                <img
                  src={item.headerPhoto || defaultImageUrl}
                  alt=""
                  className="rounded-md  object-cover "
                />
              </Link>
              <div className="flex flex-col pt-4 w-full mt-5 md:w-1/3">
                <span className=" w-fit text-center p-1 rounded  bg-refubookYellow  text-refubookGray font-bold  ">
                  {item.date.toDate().toDateString()}
                </span>
                <Link
                  to={`/blog/${item.id}`}
                  className="mt-5 mb-10 lg:text-4xl  text-2xl text-refubookWhite font-light  "
                >
                  {item.title}
                </Link>
                <div className="flex items-center">
                  <div className=" rounded-full w-10 h-10 w  ">
                    <img
                      src={item.author?.photo || avatar}
                      alt=""
                      className="rounded-full w-10 h-10 w  "
                    />
                  </div>
                  <div className="flex flex-col ml-10 ">
                    <p className="text-refubookWhite font-bold ">
                      {item.author?.name}
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
};
export default Stories;
