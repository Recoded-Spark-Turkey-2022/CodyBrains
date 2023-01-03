import { FaFacebookF, FaGoogle } from 'react-icons/fa';
import useFacebookAuth from '../../hooks/useFacebookAuth';
import useGoogleAuth from '../../hooks/useGoogleAuth';

const Providers = () => {
  const { handleLoginWithGoogle } = useGoogleAuth();
  const { handleLoginWithFacebook } = useFacebookAuth();

  return (
    <div className="flex flex-col md:flex-row  items-center justify-center gap-5   sm:px-6 lg:px-8 w-full ">
      <button
        type="button"
        data-testid="google"
        aria-label="google"
        className="bg-googleRed py-4 px-20 w-full inline-flex items-center justify-center border border-gray-300 shadow-sm text-sm font-medium rounded-md text-white  "
        onClick={handleLoginWithGoogle}
      >
        <FaGoogle className="mr-2 text-refubookWhite text-2xl" />
      </button>
      <h3 className="text-center text-lg font-medium text-refubookBlue">OR</h3>
      <button
        type="button"
        data-testid="facebook"
        aria-label="facebook"
        className="bg-facebookBlue py-4 px-20 w-full inline-flex items-center justify-center border border-gray-300 shadow-sm text-sm font-medium rounded-md text-white  "
        onClick={handleLoginWithFacebook}
      >
        <FaFacebookF className="mr-2 text-refubookWhite text-2xl" />
      </button>
    </div>
  );
};

export default Providers;
