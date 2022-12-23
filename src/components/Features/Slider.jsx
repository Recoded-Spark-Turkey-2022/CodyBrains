import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import featuresData from '../../data/featuresData';
import star from '../../assets/star.svg';

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
    >
      {/* We map over the featuresData array to render a SwiperSlide for each item in the array. */}
      {featuresData.map((item) => {
        return (
          // The SwiperSlide component is used to wrap the content that we want to display as a slide.
          // We pass a unique key prop to each SwiperSlide to help with rendering performance.
          <SwiperSlide key={item.id}>
            {/* The content for each slide is a div containing an image, a title, and some text. */}
            <div className=" flex flex-col items-center justify-center gap-5 py-5">
              <img src={star} alt="" />
              <p className="text-md  text-refubookLightBlack font-medium text-center">
                {item.title}
              </p>
              <p className="text-md  text-refubookLightBlack font-medium text-center mb-4">
                {item.text}
              </p>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slider;
