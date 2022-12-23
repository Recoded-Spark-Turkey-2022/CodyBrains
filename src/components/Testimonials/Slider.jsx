import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import testimonialsData from '../../data/testimonialsData';

// The Slider component is a pagination component that uses SwiperJS to display slides of content.
const Slider = () => {
  return (
    // The Swiper component is wrapped around the content that we want to display as slides.
    // We pass in the pagination prop and set clickable to true to enable pagination for the Swiper.
    // We also pass in the Pagination module to enable pagination functionality.
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
  );
};

export default Slider;
