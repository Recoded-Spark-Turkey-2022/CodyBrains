import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import featuresData from '../../data/featuresData';
import star from '../../assets/star.svg';

const Slider = () => {
  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
    >
      {featuresData.map((item) => {
        return (
          <SwiperSlide key={item.id}>
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
