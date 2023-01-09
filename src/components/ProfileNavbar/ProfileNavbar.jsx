import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { FaBars, FaArrowLeft } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { auth } from '../../services/firebase.config';
import { logout, selectUser } from '../../features/userSlice';
import logo from '../../assets/logo.svg';
import avatar from '../../assets/avatar.png';

const ProfileNavbar = ({ isOpen, setIsOpen }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectUser);

  const logOut = async () => {
    try {
      await signOut(auth);
      dispatch(logout());
      Swal.fire({
        icon: 'success',
        title: 'Goodbye!',
        text: 'You are logged out',
      });
      navigate('/');
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.message,
      });
    }
  };

  const capitalize = (str) => {
    return str?.replace(/\b[a-z]/g, (char) => {
      return char.toUpperCase();
    });
  };
  return (
    <>
      <nav className="flex items-center justify-between w-full over mt-10 px-5 md:py-2 md:px-10 ">
        <div className=" hidden  md:flex items-center justify-center">
          <Link
            to="/"
            className="text-refubookBlue font-bold text-xl tracking-tight flex items-center"
          >
            <img src={logo} alt="" className="w-10 h-10 mr-2" />
            <p className="text-refubookBlue font-bold text-xl tracking-tight">
              Refubook
            </p>
          </Link>
        </div>

        <div className="hidden md:flex flex-grow  items-center justify-end">
          <ul className="flex justify-center items-center">
            <li className="mr-6">
              <Link
                to="/"
                className="text-refubookGray hover:text-refubookActiveNav font-medium"
              >
                Home
              </Link>
            </li>

            <li className="mr-6">
              <Link
                to="/write"
                className="text-refubookGray hover:text-refubookActiveNav font-medium"
              >
                Write
              </Link>
            </li>

            <li className="mr-6">
              <Link
                to="/profile"
                className="text-refubookGray hover:text-refubookActiveNav font-medium"
              >
                My Account
              </Link>
            </li>

            <button
              type="button"
              onClick={logOut}
              className="text-refubookGray hover:text-refubookActiveNav font-medium"
            >
              Sign Out
            </button>
          </ul>
        </div>

        <div className="md:hidden flex items-center justify-center">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className=" text-refubookBlue font-extrabold text-2xl"
          >
            <FaBars />
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="absolute bg-refubookWhite  top-0 left-0 w-4/5 min-h-full bg-white z-10 flex flex-col gap-36 shadow-xl shadow-refubookLightBlue rounded-3xl">
          <div className="flex flex-col items-center gap-5 mt-8 px-5">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="text-refubookBlue font-medium ml-5 text-2xl justify-start w-full"
            >
              <FaArrowLeft />
            </button>
            <div className="flex flex-col w-fit mx-auto items-center justify-center relative">
              <img
                src={user ? user.photoURL : avatar}
                onError={(e) => {
                  e.target.onerror = avatar;
                }}
                alt=""
                className="w-40 h-40 rounded-full "
              />
              <div className="absolute bottom-10 right-0 mt-4 mr-4 bg-profileStatusRed w-8 h-8 rounded-full" />
              <p className="text-refubookBlack font-medium text-xl tracking-tight mt-2">
                {capitalize(user?.displayName)}
              </p>
            </div>
          </div>
          <ul className="flex flex-col ml-12  ">
            <li className="my-4">
              <Link
                to="/"
                className="text-refubookGray hover:text-refubookActiveNav font-medium"
              >
                Home
              </Link>
            </li>
            <li className="my-4">
              <Link
                to="/profile"
                className="text-refubookGray hover:text-refubookActiveNav font-medium"
              >
                My Account
              </Link>
            </li>
            <li className="my-4">
              <Link
                to="/write"
                className="text-refubookGray hover:text-refubookActiveNav font-medium"
              >
                Write
              </Link>
            </li>
            <li className="my-4">
              <button
                type="button"
                onClick={logOut}
                className="text-refubookGray hover:text-refubookActiveNav font-medium"
              >
                Sign Out
              </button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default ProfileNavbar;
