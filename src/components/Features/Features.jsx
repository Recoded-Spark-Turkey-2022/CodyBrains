import { Link } from 'react-router-dom';
import illustration from '../../assets/features-illustration.svg';
import Slider from './Slider';
import featuresData from '../../data/featuresData';
import Feature from './Feature';

const About = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-refubookAboutBlue py-4 mt-5">
      <div className=" w-3/4  md:w-2/3 flex flex-col items-center gap-4 justify-center py-5">
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
        <button
          type="button"
          className=" py-1 px-3 md:py-2 md:px-9 bg-refubookBlue text-refubookWhite font-bold text-lg md:text-xl  rounded-full shadow-lg hover:bg-refubookWhite hover:text-refubookBlack transition duration-500 ease-in-out"
        >
          <Link to="about">Learn More</Link>
        </button>
      </div>
      <div className="w-full flex flex-col items-center md:flex-row-reverse justify-center 2xl:justify-evenly gap-4 py-5">
        <img src={illustration} alt="" />
        <div className="block md:hidden w-full max-w-sm">
          <Slider />
        </div>
        <div className="hidden md:grid grid-cols-2 grid-rows-2 gap-2 justify-start px-10">
          {featuresData.map((item) => {
            return <Feature key={item.id} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
