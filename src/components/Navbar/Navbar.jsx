import React, { Fragment, useEffect } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { BsChevronDown } from 'react-icons/bs';
import { getDoc, doc } from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import Swal from 'sweetalert2';
import logo from '../../assets/logo.svg';
import { logout, selectUser, setUser } from '../../features/userSlice';
import avatar from '../../assets/avatar.png';
import { auth, db } from '../../services/firebase.config';

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOut = async () => {
    try {
      await signOut(auth);
      dispatch(logout());
      navigate('/');
    } catch (error) {
      Swal.fire('Error', error.message, 'error');
    }
  };
  const user = useSelector(selectUser);

  useEffect(() => {
    if (!user) return;
    const getUser = async () => {
      try {
        const docRef = doc(db, 'users', user?.uid);
        const docSnap = await getDoc(docRef);
        ææ;

        if (docSnap.exists()) {
          dispatch(setUser(docSnap.data()));
        } else {
          Swal.fire('Error', 'No such document!', 'error');
        }
      } catch (error) {
        Swal.fire('Error', error.message, 'error');
        console.log(error);
      }
    };
    getUser();
  }, []);

  const capitalize = (str) => {
    return str?.replace(/\b[a-z]/g, (char) => {
      return char.toUpperCase();
    });
  };

  return (
    <nav className="flex items-center justify-between w-full over mt-10 py-2 px-5 z-10">
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
                    src={user?.photoURL ? user?.photoURL : avatar}
                    alt="profile pic"
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  <p className="mr-2">{capitalize(user?.name)}</p>
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
  );
}

export default Navbar;
