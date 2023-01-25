import React, { Fragment, useEffect, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { BsChevronDown } from 'react-icons/bs';
import { FaArrowLeft, FaBars } from 'react-icons/fa';
import { signOut } from 'firebase/auth';
import Swal from 'sweetalert2';
import logo from '../../assets/logo.svg';
import { logout, selectUser } from '../../features/userSlice';
import avatar from '../../assets/avatar.png';
import { auth } from '../../services/firebase.config';

const Navbar = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);

  const [navigation, setNavigation] = useState([
    { name: t('Home'), href: '/', current: false },
    { name: t('About'), href: '/about', current: false },
    { name: t('Blog'), href: '/blog', current: false },
    { name: t('Contact'), href: '/contact', current: false },
  ]);

  const [profileNavigation, setProfileNavigation] = useState([
    { name: t('Home'), href: '/', current: false },
    { name: t('Profile'), href: '/profile', current: false },
    { name: t('Write'), href: '/write', current: false },
    { name: t('Sign Out'), href: '/', onClick: 'logOut', current: false },
  ]);

  const [dropdownNavigation, setDropdownNavigation] = useState([
    { name: t('Profile'), href: '/profile', current: false },
    { name: t('Write'), href: '/write', current: false },
    { name: t('Sign Out'), href: '/', onClick: 'logOut', current: false },
  ]);

  const logOut = async () => {
    try {
      await signOut(auth);
      dispatch(logout());
      setIsOpen(false);
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

  useEffect(() => {
    setNavigation((prev) =>
      prev.map((item) => {
        if (item.href === location.pathname) {
          return { ...item, current: true };
        }
        return { ...item, current: false };
      })
    );
    setProfileNavigation((prev) =>
      prev.map((item) => {
        if (item.href === location.pathname) {
          return { ...item, current: true };
        }
        return { ...item, current: false };
      })
    );
    setDropdownNavigation((prev) =>
      prev.map((item) => {
        if (item.href === location.pathname) {
          return { ...item, current: true };
        }
        return { ...item, current: false };
      })
    );
  }, [location.pathname]);

  return (
    <div className=" w-full  z-[100] py-6 px-8">
      <div className="flex justify-between  items-center w-full h-full ">
        <div className="flex items-center">
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="md:hidden block cursor-pointer  "
          >
            <FaBars size={25} />
          </button>
          <Link
            to="/"
            className="text-refubookBlue font-bold text-xl  gap-2 md:flex items-center hidden "
          >
            <img src={logo} alt="Refubook Logo" className="h-10 w-10 " />
            {t('Refubook')}
          </Link>
        </div>

        {/* Hamburger Icon */}

        <div className="hidden md:flex items-center gap-4">
          <ul className="hidden md:flex">
            {location.pathname === '/profile' || location.pathname === '/write'
              ? profileNavigation.map((item) => (
                  <Link
                    to={item.href}
                    key={item.name}
                    onClick={item.onClick === 'logOut' ? logOut : null}
                  >
                    <li
                      className={`${
                        item.current ? 'border-b' : ''
                      } py-2 px-4   text-refubookBlue font-medium text-lg tracking-tight`}
                    >
                      {item.name}
                    </li>
                  </Link>
                ))
              : navigation.map((item) => (
                  <Link to={item.href} key={item.name}>
                    <li
                      className={`${
                        item.current ? 'border-b' : ''
                      } py-2 px-4   text-refubookBlue font-medium text-lg tracking-tight`}
                    >
                      {item.name}
                    </li>
                  </Link>
                ))}
          </ul>
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
                  <p className="mr-2">{capitalize(user.displayName)}</p>
                  <BsChevronDown
                    className="ml-2 -mr-1 h-5 w-5"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition-opacity duration-75"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Menu.Items className="absolute bg-refubookWhite right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="px-1 py-1  ">
                    {dropdownNavigation.map((item) => (
                      <Menu.Item key={item.name}>
                        {({ active }) => (
                          <Link
                            to={item.href}
                            onClick={item.onClick === 'logOut' ? logOut : null}
                            className={`${
                              active
                                ? 'bg-refubookActiveNav text-white'
                                : 'text-gray-900'
                            } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                          >
                            {item.name}
                          </Link>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          ) : (
            <div className="flex items-center gap-4">
              <Link
                to="/signin"
                className="bg-refubookBlue text-refubookWhite px-4 py-2 rounded-3xl font-medium"
              >
                {t('Sign_In')}
              </Link>

              <Link
                to="/signup"
                className="bg-refubookBlue text-refubookWhite px-4 py-2 rounded-3xl font-medium"
              >
                {t('Sign_Up')}
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          isOpen
            ? 'md:hidden fixed left-0 top-0 w-full min-h-screen bg-black/70'
            : ''
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            isOpen
              ? ' fixed top-0 left-0 bottom-0 w-[60%] overflow-clip flex-shrink md:w-[45%] min-h-screen bg-refubookWhite p-10 ease-in duration-500 shadow-xl shadow-refubookBlack rounded-tr-3xl rounded-br-3xl'
              : 'fixed left-[-100%] top-0 bottom-0 p-10 ease-in duration-500 bg-refubookWhite'
          }
        >
          <div>
            <div className="flex w-full items-center ">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-full  p-3 cursor-pointer text-refubookBlue text-2xl"
              >
                <FaArrowLeft />
              </button>
            </div>
          </div>
          <div className="py-4 flex flex-col h-full">
            {user ? (
              <>
                <div className="flex flex-col  mx-auto items-center justify-center relative">
                  <img
                    src={user ? user.photoURL : avatar}
                    onError={(e) => {
                      e.target.onerror = avatar;
                    }}
                    alt=""
                    className="w-40 h-40 rounded-full "
                  />
                  <div className="absolute bottom-0 right-0 mt-4 mr-4 bg-profileStatusRed w-8 h-8 rounded-full" />
                </div>
                {location.pathname === '/profile' ||
                location.pathname === '/write' ? (
                  <div className="flex flex-col items-center justify-center mt-4">
                    <p className="text-2xl font-bold text-center">
                      {capitalize(user.displayName)}
                    </p>
                  </div>
                ) : (
                  <Menu as="div" className=" relative inline-block text-left ">
                    <div>
                      <Menu.Button className="flex items-center justify-center w-full px-4 py-2 text-sm font-semibold   ">
                        <p className="mr-2 text-xl">
                          {capitalize(user.displayName)}
                        </p>
                        <BsChevronDown
                          className="ml-2 -mr-1 text-2xl font-extrabold  text-refubookBlack"
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
                      <Menu.Items className="absolute z-[999] bg-refubookWhite w-full  flex flex-col gap-10 mt-2  divide-y divide-refubookBlack rounded-md shadow-lg ring-1 ring-refubookBlack ring-opacity-5 focus:outline-none">
                        <div className="px-2 py-1  ">
                          {dropdownNavigation.map((item) => (
                            <Menu.Item key={item.name}>
                              {({ active }) => (
                                <Link
                                  to={item.href}
                                  onClick={
                                    item.onClick === 'logOut' ? logOut : null
                                  }
                                  className={`${
                                    active
                                      ? 'bg-refubookActiveNav text-white'
                                      : 'text-gray-900'
                                  } group flex rounded-md items-center w-full p-4 text-xl font-medium`}
                                >
                                  {item.name}
                                </Link>
                              )}
                            </Menu.Item>
                          ))}
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                )}
              </>
            ) : (
              <div className="flex items-center justify-evenly">
                <Link
                  to="/signin"
                  className="bg-refubookBlue text-refubookWhite px-4 py-2 rounded-3xl font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {t('Sign_In')}
                </Link>

                <Link
                  to="/signup"
                  className="bg-refubookBlue text-refubookWhite px-4 py-2 rounded-3xl font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {t('Sign_Up')}
                </Link>
              </div>
            )}
            <ul className="flex flex-col ml-5 mt-28 h-full ">
              {location.pathname === '/profile' ||
              location.pathname === '/write'
                ? profileNavigation.map((item) => (
                    <Link to={item.href} key={item.name}>
                      <li
                        onClick={() => setIsOpen(false)}
                        aria-hidden="true"
                        className="py-2 text-2xl font-semibold text-refubookBlue"
                      >
                        {item.name}
                      </li>
                    </Link>
                  ))
                : navigation.map((item) => (
                    <Link to={item.href} key={item.name}>
                      <li
                        onClick={() => setIsOpen(false)}
                        aria-hidden="true"
                        className="py-2 text-2xl font-semibold text-refubookBlue"
                      >
                        {item.name}
                      </li>
                    </Link>
                  ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
