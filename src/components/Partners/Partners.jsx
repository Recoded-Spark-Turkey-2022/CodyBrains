import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import { useTranslation } from 'react-i18next';
import partners from '../../data/partnersData';

const Partners = () => {
  const { t } = useTranslation();
  return (
    <div
      className="flex flex-col items-center justify-center w-full bg-refubookWhite px-8 py-4"
      dir="ltr"
    >
      <h1 className="text-3xl text-refubookBlack font-bold text-center">
        {t('Our_Partners')}
      </h1>
      <Swiper
        spaceBetween={5}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="w-full "
        loop
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 5,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 5,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 5,
          },
          1280: {
            slidesPerView: 6,
            spaceBetween: 5,
          },
        }}
      >
        {partners.map((item) => {
          return (
            <SwiperSlide
              key={item.id}
              className="flex items-center justify-center "
            >
              <img
                src={item.image}
                alt="logo"
                className=" block w-40 h-40 object-contain  "
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Partners;
