
import { Link } from 'react-router-dom';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import blogsData from '../../data/blogsData';

const Blog = () => {
  const firstFourBlogs = blogsData.slice(0, 4);

  return (

    <div className="bg-refubookWhite">
      <div className="  py-16 px-8 mx-auto container">
        <h2 className="sr-only">Blog Posts</h2>
        <Swiper
          spaceBetween={15}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="w-full "
          loop
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
          {blogsData.map((item) => {
            return (
              <SwiperSlide
                key={item.id}
                className=" rounded-lg border border-gray-100 shadow-sm"
              >
                <img
                  src={item.cover}
                  alt={item.title}
                  className="h-56 w-full object-cover"
                />

                <div className="p-6">
                  <Link to={`blogs/${item.id}`}>
                    <h3 className="text-md font-medium ">{item.title}</h3>
                  </Link>
                  <p className="mt-2 text-sm leading-relaxed  truncate">
                    {item.text}
                  </p>
                  <div className="group mt-4 inline-flex items-center gap-1 text-sm font-medium">
                    <img
                      src={item.avatar}
                      alt=""
                      className="w-10 h-10 rounded-full"
                    />
                    <p className="block transition group-hover:translate-x-0.5 ">
                      {item.userName}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
          ;
        </Swiper>
      </div>
      <div className="grid grid-cols-2  md:grid-cols-4 gap-4 md:gap-6 p-4">
        {firstFourBlogs.map((item) => {
          return (
            <div
              className="relative group shadow-md bg-refubookWhite border border-refubookGray rounded-lg flex flex-col overflow-hidden "
              key={item.id}
            >
              <img src={item.cover} alt={item.title} />

              <div className=" p-4 space-y-2 flex flex-col ">
                <p className="text-xs md:text-md font-medium text-gray-900">
                  <Link to={`blogs/${item.id}`}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {item.title}
                  </Link>
                </p>
                <p className="text-sm text-gray-500 truncate">{item.text}</p>
                <div className="flex-1 flex flex-col justify-center">
                  <img
                    src={item.avatar}
                    alt=""
                    className="w-10 h-10 rounded-full"
                  />
                  <p className="text-sm text-gray-500">{item.userName}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;

