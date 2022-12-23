import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';

function Navbar() {
  return (
    <nav className="flex items-center justify-between w-full mt-10 py-2 px-5">
      <div className="px-16 flex items-center justify-center">
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
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
