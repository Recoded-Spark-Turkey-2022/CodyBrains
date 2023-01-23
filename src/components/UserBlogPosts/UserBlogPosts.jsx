import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Navigation, Pagination, Scrollbar } from 'swiper';
import { doc, getDoc } from 'firebase/firestore';
import parse from 'html-react-parser';
import { AiOutlinePlus } from 'react-icons/ai';
import { db } from '../../services/firebase.config';

const UserBlogPosts = ({ user }) => {
  const navigate = useNavigate();
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const getBlogPosts = async () => {
      const docRef = doc(db, 'users', user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setBlogPosts(docSnap.data().posts);
      } else {
        navigate('/404');
      }
    };

    getBlogPosts();
  }, [user]);

  return (
    <div className="w-full container mx-auto p-4">
      {blogPosts.length ? (
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, Grid]}
          spaceBetween={20}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          grid={{ rows: 2, fill: 'row' }}
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
              slidesPerView: 3,
              spaceBetween: 50,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          className="p-4 my-14"
        >
          {blogPosts.map((blogPost) => (
            <SwiperSlide
              key={blogPost.id}
              className="flex flex-col rounded-lg shadow-lg  "
            >
              <div className="bg-refubookWhite rounded-lg shadow-lg p-4 flex flex-col gap-2 border border-refubookGray h-96">
                <h1 className="text-xl capitalize font-bold flex items-center w-full justify-between">
                  {blogPost.title}
                  <p className="text-sm text-refubookGray">
                    {new Date(
                      blogPost.date.seconds * 1000
                    ).toLocaleDateString()}
                  </p>
                </h1>
                <div className="flex gap-2 items-center justify-center">
                  <img
                    src={blogPost.author?.photoURL}
                    alt=""
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="text-sm  text-gray-500">
                    {blogPost.author?.displayName}
                  </span>
                </div>
                <div className="mt-2 ">
                  {parse(blogPost.content, {
                    replace: (domNode) => {
                      if (domNode.name === 'img') {
                        domNode.attribs.class = 'w-40 h-40 rounded-lg';
                      } else if (domNode.name === 'p') {
                        domNode.attribs.class = 'text-sm';
                      }

                      return domNode;
                    },
                  })}
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-refubookBlue text-white p-2 rounded-lg"
                  onClick={() => navigate(`/blog/${blogPost.id}`)}
                >
                  Read more
                </button>
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
  );
};

export default UserBlogPosts;
