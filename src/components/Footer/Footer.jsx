import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import LanguagesMenu from '../LanguagesMenu/LanguagesMenu';

const Footer = () => {

  
  return (
    <div className="lg:flex lg:flex-row lg:pt-20 max-lg:flex max-lg:flex-col max-lg:items-center max-lg:justify-center py-10 ">
      <div className="items-center justify-center mr-6">
        <Link
          to="/"
          className="text-refubookBlue font-bold text-xl tracking-tight "
        >
          <img src={logo} alt="logo" />
        </Link>
      </div>

      <div className="flex-grow flex items-center">
        <ul className="flex justify-center ">
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
              to="/contact"
              className="text-refubookGray hover:text-refubookActiveNav font-medium"
            >
              Contact
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
        </ul>
      </div>
      <div className="flex max-lg:pb-10 max-lg:ml-10 justify-between">
      <Link to="/signup">
          <button
            type="button"
            className="mr-6 px-12 py-3 bg-refubookBlue text-white font-medium text-l leading-tight
            rounded-full shadow-md
            ease-in duration-300 hover:shadow-lg"
          >
            Sign Up
          </button>
        </Link>
      <LanguagesMenu />
    </div>
    </div>
  );
};

export default Footer;
