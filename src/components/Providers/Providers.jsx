import { FaFacebookF, FaGoogle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signInWithPopup } from 'firebase/auth';
import Swal from 'sweetalert2';
import { setUser } from '../../features/userSlice';
import {
  auth,
  facebookProvider,
  googleProvider,
} from '../../services/firebase.config';

const Providers = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLoginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const { displayName, email, photoURL, uid } = result.user;
      dispatch(
        setUser({
          uid,
          email,
          displayName,
          photoURL,
        })
      );
      localStorage.setItem('user', JSON.stringify(result.user));

      navigate('/');
      Swal.fire('Success', 'Login Success', 'success');
    } catch (error) {
      Swal.fire('Error', error.message, 'error');
    }
  };

  const handleLoginWithFacebook = async () => {
    try {
      const result = await signInWithPopup(auth, facebookProvider);
      const { displayName, email, photoURL, uid } = result.user;
      dispatch(
        setUser({
          uid,
          email,
          displayName,
          photoURL,
        })
      );
      localStorage.setItem('user', JSON.stringify(result.user));

      navigate('/');
      Swal.fire('Success', 'Login Success', 'success');
    } catch (error) {
      Swal.fire('Error', error.message, 'error');
    }
  };

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
