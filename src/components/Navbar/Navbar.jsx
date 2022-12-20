import React from "react";
import { Link } from "react-router-dom";

function Navbar() {

  return (

    <div className="flex items-center justify-center flex-wrap bg-transparent p-5">

      <div className="px-16 flex justify-center items-center justify-center">
        <Link to="/" className="text-refubookBlue font-bold text-xl tracking-tight" >
          Refubook
        </Link>
      </div>

      <div className="flex-grow flex items-center">
        <ul className="flex justify-center">
          <li className="mr-6">
            <Link to="/" className="text-refubookGray hover:text-refubookActiveNav font-medium" >
              Home
            </Link>
          </li>

          <li className="mr-6">
            <Link to="/about" className="text-refubookGray hover:text-refubookActiveNav font-medium" >
              About
            </Link>
          </li>

          <li className="mr-6">
            <Link to="/blog" className="text-refubookGray hover:text-refubookActiveNav font-medium" >
              Blog
            </Link>
          </li>

          <li className="mr-6">
            <Link to="/contact" className="text-refubookGray hover:text-refubookActiveNav font-medium" >
              Contact
            </Link>
          </li>

        </ul>

      </div>

    </div>

  );
}

export default Navbar;