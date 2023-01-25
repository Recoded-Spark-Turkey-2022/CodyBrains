import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import { useTranslation } from 'react-i18next';

import map from '../../assets/world-map.svg';

const Testimonials = () => {
  const { t } = useTranslation();
  const testimonialsData = [
    {
      id: 1,
      name: t('Maria'),
      comment: t('Maria_Comment'),
      country:t('Maria_Country'),
    },
    {
      id: 1,
      name: t('Hassan'),
      comment: t('Hassan_Comment'),
      country:t('Hassan_Country'),
    },
    {
      id: 1,
      name: t('Olga'),
      comment: t('Olga_Comment'),
      country:t('Olga_Country'),
    },
    {
      id: 1,
      name: t('John'),
      comment: t('John_Comment'),
      country:t('John_Country'),
    },
  ]

  return (
    <div className="flex flex-col md:flex-row items-center justify-evenly w-full bg-refubookWhite px-8 py-4">
      <div className="flex flex-col items-center justify-center max-w-md">
        <img src={map} alt="" className="w-96 h-96" />
      </div>
      <div className="flex flex-col items-center justify-center max-w-xs md:max-w-md px-4">
        <Swiper
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="flex items-center justify-center w-full gap-3"
          loop
        >
          {/* We map over the testimonialsData array to render a SwiperSlide for each item in the array. */}
          {testimonialsData.map((item) => {
            return (
              // The SwiperSlide component is used to wrap the content that we want to display as a slide.
              // We pass a unique key prop to each SwiperSlide to help with rendering performance.
              <SwiperSlide key={item.id} className=" flex flex-col  gap-3 ">
                {/* The content for each slide is a div containing an image, a title, and some text. */}

                <h3 className="text-lg text-refubookBlack font-normal md:text-justify  text-center">
                  {item.comment}
                </h3>
                <span className="text-md  text-refubookLightBlue font-light md:text-left text-center">
                  {item.name}
                </span>
                <span className="text-md  text-refubookLightBlue font-light md:text-left text-center mb-8">
                  {item.country}
                </span>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
