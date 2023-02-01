import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { collection, getDocs } from 'firebase/firestore';
import parse from 'html-react-parser';
import { db } from '../../services/firebase.config';
import blogsData from '../../data/blogsData';

const Blog = () => {
  const { t } = useTranslation();

  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getBlogs = async () => {
      setLoading(true);
      const querySnapshot = await getDocs(collection(db, 'blogs'));
      const blogs = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBlogPosts(blogs);
      setLoading(false);
    };
    getBlogs();
  }, []);
  const firstFourBlogs = blogsData.slice(0, 4);

  const combinedArrays = [...blogPosts, ...blogsData];

  const defaultImageUrl =
    'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';

  return (
    <div className="bg-refubookWhite min-h-screen">
      {loading ? (
        <div className="text-center py-12 px-4 mx-auto flex items-center justify-center container sm:px-6 lg:px-8 bg-refubookWhite">
          <svg
            id="spinner"
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            x="0"
            y="0"
            viewBox="0 0 48 48"
          >
            <path
              fill="#4699C2"
              d="M24 42.1c-1.7 0-3.1-1.4-3.1-3.1 0-1.7 1.4-3.1 3.1-3.1 1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1zM24 13.4c-2.4 0-4.4-2-4.4-4.4 0-2.4 2-4.4 4.4-4.4 2.4 0 4.4 2 4.4 4.4 0 2.4-2 4.4-4.4 4.4zM8.4 24c0-.3.3-.6.6-.6s.6.3.6.6-.3.6-.6.6-.6-.3-.6-.6zM35 24c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4zM37.9 37.9c-1.6 1.6-4.2 1.6-5.8 0-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8 0 1.6 1.6 1.6 4.2 0 5.8zM15.2 15.2c-1.2 1.2-3.2 1.2-4.4 0-1.2-1.2-1.2-3.2 0-4.4 1.2-1.2 3.2-1.2 4.4 0 1.2 1.2 1.2 3.2 0 4.4zM32.2 15.8c-1.6-1.6-1.6-4.1 0-5.7 1.6-1.6 4.1-1.6 5.7 0 1.6 1.6 1.6 4.1 0 5.7-1.6 1.6-4.2 1.6-5.7 0z"
            />
          </svg>
        </div>
      ) : (
        <>
          <div className="  py-16 px-8 mx-auto container">
            <h2 className="sr-only">{t('Blog_Posts')}</h2>

            <Swiper
              spaceBetween={15}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              modules={[Pagination]}
              className="w-full grid grid-cols-1 gap-5  md:grid-cols-3"
              grabCursor
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                640: {
                  slidesPerView: 1,
                  spaceBetween: 5,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 5,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 5,
                },
                1280: {
                  slidesPerView: 3,
                  spaceBetween: 5,
                },
              }}
            >
              {combinedArrays.map((item) => {
                return (
                  <SwiperSlide
                    key={item.id}
                    className=" border-2 border-refubookGray rounded-lg p-2 shadow-sm max-w-xs md:max-w-3xl flex flex-col justify-between "
                  >
                    <div className=" flex flex-col h-full gap-5">
                      <img
                        className="h-40 w-full object-cover rounded"
                        src={item.headerPhoto || defaultImageUrl}
                        alt=""
                      />
                      <p className="text-sm font-medium text-refubookActiveNav">
                        {item.date.toDate().toDateString()}
                      </p>

                      <p className="md:text-md  text-lg text-center mb-3 border-b font-semibold text-refubookBlack">
                        {item.title}
                      </p>

                      {item.content && (
                        <div className="ql-editor p-0 overflow-hidden max-h-32 truncate">
                          {parse(item.content, {
                            replace: (domNode) => {
                              if (domNode.name === 'img') {
                                domNode.attribs.class += ' hidden';
                              } else if (domNode.name === 'p truncate') {
                                domNode.attribs.class += ' text-sm ';
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
                      )}

                      {item.text && (
                        <div className=" max-h-36 overflow-hidden ">
                          <p className="text-sm  ">
                            {item.text.slice(0, 230)}...
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="mt-6 flex items-center justify-between ">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <span className="sr-only">{item?.author?.name}</span>
                          <img
                            className="h-10 w-10 rounded-full"
                            src={item.author?.photo}
                            alt=""
                          />
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-refubookLightBlack">
                            {item?.author.name}
                          </p>
                        </div>
                      </div>
                      <Link
                        to={`/blog/${item.id}`}
                        className=" mt-2 bg-refubookActiveNav w-fit text-refubookWhite px-4 py-2 rounded-md text-sm font-medium hover:bg-refubookActiveNavHover focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                      >
                        <span className="sr-only">{t('Read_More')}</span>
                        <p className="text-sm font-medium text-refubookWhite">
                          {t('Read_More')}
                        </p>
                      </Link>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 py-16 px-8 gap-4  container mx-auto">
            {firstFourBlogs.map((item) => (
              <div
                key={item.title}
                className="border-2 border-refubookGray rounded-lg p-2 shadow-sm max-w-xs md:max-w-3xl flex flex-col justify-between"
              >
                <div className=" flex flex-col h-full gap-5">
                  <img
                    className="h-40 w-full object-cover rounded"
                    src={item.headerPhoto || defaultImageUrl}
                    alt=""
                  />
                  <p className="text-sm font-medium text-refubookActiveNav">
                    {item.date.toDate().toDateString()}
                  </p>

                  <p className="md:text-md  text-lg text-center mb-3 border-b font-semibold text-refubookBlack">
                    {item.title}
                  </p>

                  <div className=" max-h-36 overflow-hidden ">
                    <p className="text-sm  ">{item.text.slice(0, 200)}</p>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between ">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <span className="sr-only">{item?.author?.name}</span>
                      <img
                        className="h-10 w-10 rounded-full"
                        src={item.author?.photo}
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-refubookLightBlack">
                        {item?.author.name}
                      </p>
                    </div>
                  </div>
                  <Link
                    to={`/blog/${item.id}`}
                    className=" mt-2 bg-refubookActiveNav w-fit text-refubookWhite px-4 py-2 rounded-md text-sm font-medium hover:bg-refubookActiveNavHover focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                  >
                    <span className="sr-only">{t('Read_More')}</span>
                    <p className="text-sm font-medium text-refubookWhite">
                      {t('Read_More')}
                    </p>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Blog;
