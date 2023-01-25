/* eslint-disable no-nested-ternary */
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import { doc, getDoc } from 'firebase/firestore';

import parse from 'html-react-parser';
import { AiOutlinePlus } from 'react-icons/ai';
import { db } from '../../services/firebase.config';

const UserBlogPosts = ({ user }) => {
  const navigate = useNavigate();
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getBlogPosts = async () => {
      const blogPostsRef = doc(db, 'users', user.uid);
      const blogPostsSnap = await getDoc(blogPostsRef);
      if (blogPostsSnap.exists()) {
        setBlogPosts(blogPostsSnap.data().posts);
      }
      setLoading(false);
    };
    getBlogPosts();
  }, [user.uid]);

  const defaultImageUrl =
    'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';

  return (
    <div className="bg-refubookWhite mt-32 mb-16  ">
      {loading ? (
        <div className="text-center py-12 px-4 sm:px-6 lg:px-8 bg-refubookWhite">
          <svg
            className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8z"
            />
          </svg>
          Loading...
        </div>
      ) : (
        <div className="md:container mx-auto px-4 sm:px-6 lg:px-8 max-w-sm">
          <div className="flex justify-between items-center mb-5 px-5">
            <h2 className="md:text-2xl text-lg font-semibold text-refubookBlack">
              Your Blog Posts
            </h2>
            <button
              type="button"
              className="flex items-center justify-center h-10 w-10 rounded-full bg-refubookActiveNav text-refubookWhite"
              onClick={() => navigate('/write')}
            >
              <AiOutlinePlus className="text-2xl" />
            </button>
          </div>

          {blogPosts?.length ? (
            <Swiper
              modules={[Pagination]}
              spaceBetween={20}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              grabCursor
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 50,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              className="mySwiper w-full"
            >
              {blogPosts.map((post) => (
                <SwiperSlide
                  key={post.id}
                  className="border-2 border-refubookGray rounded-lg p-2 shadow-sm max-w-xs md:max-w-3xl"
                >
                  <div className="flex-shrink-0">
                    <img
                      className="h-40 w-full object-cover rounded"
                      src={post.headerPhoto || defaultImageUrl}
                      alt=""
                    />
                  </div>
                  <div className=" bg-refubookWhite p-3 flex flex-col justify-between">
                    <div className="flex flex-col">
                      <p className="text-sm font-medium text-refubookActiveNav">
                        {new Date(
                          post.date.seconds * 1000
                        ).toLocaleDateString()}
                      </p>

                      <p className="text-xl font-semibold text-refubookBlack">
                        {post.title}
                      </p>
                      <div className="flex flex-col max-h-36">
                        <div className="ql-editor truncate ">
                          {' '}
                          {parse(post.content, {
                            replace: (domNode) => {
                              if (domNode.name === 'img') {
                                domNode.attribs.class += ' hidden';
                              } else if (domNode.name === 'p') {
                                domNode.attribs.class += ' text-sm';
                              } else if (domNode.name === 'h1') {
                                domNode.attribs.class +=
                                  ' text-2xl font-semibold';
                              } else if (domNode.name === 'h2') {
                                domNode.attribs.class += ' text-xl font-medium';
                              }

                              return domNode;
                            },
                          })}
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <span className="sr-only">{user?.displayName}</span>
                          <img
                            className="h-10 w-10 rounded-full"
                            src={user?.photoURL}
                            alt=""
                          />
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-refubookLightBlack">
                            {user?.displayName}
                          </p>
                        </div>
                      </div>
                      <Link
                        to={`/blog/${post.id}`}
                        className=" mt-2 bg-refubookActiveNav text-refubookWhite px-4 py-2 rounded-md text-sm font-medium hover:bg-refubookActiveNavHover focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                      >
                        <span className="sr-only">Read more</span>
                        <p className="text-sm font-medium text-refubookWhite">
                          Read more
                        </p>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className="text-center py-12 px-4 sm:px-6 lg:px-8 bg-refubookWhite">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  vectorEffect="non-scaling-stroke"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                />
              </svg>
              <h3 className="mt-2 text-sm font-medium text-gray-900">
                No Blog Posts
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Get started by creating a new blog post.
              </p>
              <div className="mt-6">
                <button
                  type="button"
                  onClick={() => navigate('/write')}
                  className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <AiOutlinePlus
                    className="-ml-1 mr-2 h-5 w-5"
                    aria-hidden="true"
                  />
                  Create Blog Post
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default UserBlogPosts;

/*
     {new Date(
                          blogPost.date.seconds * 1000
                        ).toLocaleDateString()}


                          {parse(blogPost.content, {
                        replace: (domNode) => {
                          if (domNode.name === 'img') {
                            domNode.attribs.class = 'hidden';
                          } else if (domNode.name === 'p') {
                            domNode.attribs.class = 'text-sm';
                          }

                          return domNode;
                        },
                      })}
                        */
