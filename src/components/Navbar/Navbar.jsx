import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { BsChevronDown } from 'react-icons/bs';
import { FaArrowLeft, FaBars } from 'react-icons/fa';
import { signOut } from 'firebase/auth';
import Swal from 'sweetalert2';
import logo from '../../assets/logo.svg';
import { logout, selectUser } from '../../features/userSlice';
import avatar from '../../assets/avatar.png';
import { auth } from '../../services/firebase.config';

const Navbar = ({ isOpen, setIsOpen }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const user = useSelector(selectUser);

  const capitalize = (str) => {
    return str?.replace(/\b[a-z]/g, (char) => {
      return char.toUpperCase();
    });
  };

  return (
    <>
      <nav className=" hidden md:flex items-center justify-between w-full  mt-10 py-2 px-5 z-10">
        <div className=" flex items-center justify-center">
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
                to="/about"
                className="text-refubookGray hover:text-refubookActiveNav font-medium"
              >
                About
              </Link>
            </li>

            <li className="mr-6">
              <Link
                to="/blog"
                className="text-refubookGray hover:text-refubookActiveNav font-medium"
              >
                Blog
              </Link>
            </li>

            <li className="mr-6">
              <Link
                to="/contact"
                className="text-refubookGray hover:text-refubookActiveNav font-medium"
              >
                Contact
              </Link>
            </li>
            {user ? (
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-refubookBlue border border-transparent rounded-md hover:bg-refubookActiveNav focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                    <img
                      src={user?.photoURL}
                      onError={(e) => {
                        e.target.onerror = avatar;
                      }}
                      alt="profile pic"
                      className="w-8 h-8 rounded-full mr-2"
                    />
                    <p className="mr-2">{capitalize(user?.displayName)}</p>
                    <BsChevronDown
                      className="ml-2 -mr-1 h-5 w-5"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute bg-refubookWhite right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="px-1 py-1  ">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/profile"
                            className={`${
                              active
                                ? 'bg-refubookActiveNav text-white'
                                : 'text-gray-900'
                            } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                          >
                            Profile
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/"
                            className={`${
                              active
                                ? 'bg-refubookActiveNav text-white'
                                : 'text-gray-900'
                            } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                          >
                            Settings
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            type="button"
                            onClick={logOut}
                            className={`${
                              active
                                ? 'bg-refubookActiveNav text-white'
                                : 'text-gray-900'
                            } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                          >
                            Sign out
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            ) : (
              <div className="flex ">
                <li className="mr-6 ">
                  <Link
                    to="/signin"
                    className="bg-refubookBlue text-refubookWhite px-4 py-2 rounded-3xl font-medium"
                  >
                    Sign In
                  </Link>
                </li>
                <li className="mr-6 ">
                  <Link
                    to="/signup"
                    className="bg-refubookBlue text-refubookWhite px-4 py-2 rounded-3xl font-medium"
                  >
                    Sign Up
                  </Link>
                </li>
              </div>
            )}
          </ul>
        </div>
      </nav>
      <div className="md:hidden flex items-center justify-start mt-10 py-2 px-5 z-10">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className=" text-refubookBlue font-extrabold text-2xl"
        >
          <FaBars />
        </button>
      </div>
      <Transition
        show={isOpen}
        as={Fragment}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
      >
        <div className="absolute bg-refubookWhite  top-0 left-0 w-4/5 h-full bg-white z-10 flex flex-col gap-36 shadow-xl shadow-refubookLightBlue rounded-3xl">
          <div className="flex flex-col items-center gap-5 mt-10 py-2 px-5">
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
              <Link to="/" className="text-refubookBlue  font-semibold text-xl">
                Home
              </Link>
            </li>
            <li className="my-4">
              <Link
                to="/about"
                className="text-refubookBlue  font-semibold text-xl"
              >
                About US
              </Link>
            </li>
            <li className="my-4">
              <Link
                to="/contact"
                className="text-refubookBlue  font-semibold text-xl"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </Transition>
    </>
  );
};

export default Navbar;
