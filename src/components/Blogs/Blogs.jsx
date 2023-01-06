import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import featuresData from '../../data/featuresData';
import Feature from './Feature';
import illustration from '../../assets/features-illustration.svg';
import star from '../../assets/star.svg';

// The Features component is a functional component that displays information about RefuBook.
const Features = () => {
  return (
    // The component consists of a div with a blue background and two main sections: a section with text and a button, and a section with an illustration and a list of features.
    <div className="w-full flex flex-col items-center justify-center bg-refubookAboutBlue py-4 mt-5">
      <div className=" w-3/4  md:w-2/3 flex flex-col items-center gap-4 justify-center py-5">
        {/* The first section contains a heading and a paragraph of text. */}
        <h1 className="text-4xl md:text-3xl xl:text-4xl   text-refubookBlue font-bold text-center">
          About
        </h1>
        <p className="text-md leading-relaxed md:text-lg  text-refubookLightBlack font-medium text-justify md:text-center">
          RefuBook is a website dedicated to helping refugees navigate their new
          surroundings and feel connected to their community. We offer a
          platform for sharing knowledge and experiences, and strive to be a
          comprehensive and reliable source of information. Thank you for
          visiting and we hope you find the resources here helpful in your
          journey as a refugee.
        </p>
        {/* The first section also contains a button with a link to the "about" page. */}
        <Link to="about">
          <button
            type="button"
            className=" py-1 px-3 md:py-2 md:px-9 bg-refubookBlue text-refubookWhite font-bold text-lg md:text-xl  rounded-full shadow-lg hover:bg-refubookWhite hover:text-refubookBlack transition duration-500 ease-in-out"
          >
            Learn More
          </button>
        </Link>
      </div>
      <div className="w-full flex flex-col items-center md:flex-row-reverse justify-center 2xl:justify-evenly gap-4 py-5">
        {/* The second section contains an illustration and a list of features. */}
        <img src={illustration} alt="" />
        {/* The Slider component is used to display the list of features on smaller screens. */}
        <div className="block md:hidden w-full max-w-sm">
          {/*   The Swiper component is wrapped around the content that we want to display as slides.
    We pass in the pagination prop and set clickable to true to enable pagination for the Swiper.
    We also pass in the Pagination module to enable pagination functionality. */}
          <Swiper
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
          >
            {/* We map over the featuresData array to render a SwiperSlide for each item in the array. */}
            {featuresData?.map((item) => {
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
        </div>
        {/* On larger screens, the features are displayed in a grid using the Feature component. */}
        <div className="hidden md:grid grid-cols-2 grid-rows-2 gap-2 justify-start px-10">
          {/* We map over the featuresData array to render a Feature component for each item in the array. */}
          {featuresData?.map((item) => {
            return <Feature key={item.id} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Features;
