import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import DropdownComponent from '../DropdownComponent/DropdownComponent';

const Footer = () => {

  
  return (
    <div className="flex items-center justify-center bg-transparent p-20 m-5 ">
      <div className="items-center justify-center mr-6">
        <Link
          to="/"
          className="text-refubookBlue font-bold text-xl tracking-tight "
        >
          <img src={logo} alt="logo" />
        </Link>
      </div>

      <div className="flex-grow flex items-center">
        <ul className="flex justify-center">
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
      <div className="flex max-lg:pb-10 max-lg:ml-10 items-start">
      <Link to="/signup">
          <button
            type="button"
            className=" px-4 mx-5 md:py-2 md:px-9 h-10 w-40  bg-refubookBlue text-refubookWhite font-bold text-lg md:text-xl  rounded-full shadow-lg hover:bg-text-refubookGray hover:text-refubookBlack transition duration-500 ease-in-out"
          >
            Sign Up
          </button>
        </Link>
      <DropdownComponent />
    </div>
    </div>
  );
};

export default Footer;
