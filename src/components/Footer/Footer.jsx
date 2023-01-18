import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import DropdownComponent from '../DropdownComponent/DropdownComponent';

const Footer = () => {
  return (
    <div className="flex items-center justify-center bg-transparent p-5">
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

      <DropdownComponent />
    </div>
  );
};

export default Footer;
