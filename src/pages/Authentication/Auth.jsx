import { Link, useLocation } from 'react-router-dom';
import desktopBaloon from '../../assets/desktop-baloon.svg';
import mobileBaloon from '../../assets/mobile-baloon.svg';
import { Providers } from '../../components';

const Auth = () => {
  const location = useLocation();

  return (
    <section className="flex flex-col md:justify-center gap-10 items-center h-screen w-full relative ">
      <div className=" mx-auto w-full h-full flex items-center mt-10 md:mt-0 flex-col justify-evenly  bg-white rounded-3xl max-w-xs max-h-96 max  md:max-w-xl md:max-h-96 p-6 space-y-4 bg-refubookWhite z-10 shadow-2xl ">
        <div className="mb-4 text-center">
          <h3 className="text-refubookBlue text-2xl font-bold tracking-tight  text-center">
            {location.pathname === '/signup' ? 'SIGN UP WITH' : 'SIGN IN WITH'}
          </h3>
        </div>
        <div className="flex flex-col items-center justify-center w-full ">
          <Providers />
        </div>
        <div className=" hidden md:block mx-auto text-center mt-8">
          <p className="hidden md:flex gap-2 text-lg font-semibold items-center justify-center text-refubookAuthBlue">
            {location.pathname === '/signup'
              ? 'Already a member?'
              : 'Want to be a member?'}

            <span className="text-refubookBlue hover:text-refubookLightBlue">
              <Link
                to={location.pathname === '/signup' ? '/signin' : '/signup'}
              >
                {location.pathname === '/signup' ? 'Sign in' : 'Sign up'}
              </Link>
            </span>
          </p>
        </div>
      </div>

      <div className="  flex flex-col md:hidden mx-auto text-center z-10">
        <p className=" md:flex gap-2 text-lg font-semibold items-center justify-center text-refubookAuthBlue">
          {location.pathname === '/signup'
            ? 'Already a member?'
            : 'Want to be a member?'}
        </p>
        <button
          type="button"
          className="bg-refubookBlue text-refubookWhite rounded-full hover:text-refubookLightBlue p-2"
        >
          <Link to={location.pathname === '/signup' ? '/signin' : '/signup'}>
            {location.pathname === '/signup' ? 'Sign in' : 'Sign up'}
          </Link>
        </button>
      </div>

      <img
        src={desktopBaloon}
        alt="blueVector"
        className="absolute hidden md:block top-0 left-0 h-screen"
      />
      <img
        src={mobileBaloon}
        alt="blueVector"
        className="absolute md:hidden bottom-0 right-0 w-full h-4/6 object-cover"
      />
    </section>
  );
};

export default Auth;
