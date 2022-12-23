import Slider from './Slider';
import map from '../../assets/world-map.svg';

const Testimonials = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-evenly w-full bg-refubookWhite px-8 py-4">
      <div className="flex flex-col items-center justify-center max-w-md">
        <img src={map} alt="" className="w-96 h-96" />
      </div>
      <div className="flex flex-col items-center justify-center max-w-xs md:max-w-md px-4">
        <Slider />
      </div>
    </div>
  );
};

export default Testimonials;
