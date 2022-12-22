import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import ar from '../../assets/ar.png';
import en from '../../assets/en.png';

const Footer = () => {
  return (

    <div className="flex items-center justify-center bg-transparent p-5">

        <div className="items-center justify-center">
            <Link to="/" className="text-refubookBlue font-bold text-xl tracking-tight" >
            <img src={logo} alt="logo" />
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

        <div className="justify-center">

            <div className="flex justify-between">

                <div className="flex justify-between items-center">
                    <button type="button" className="text-refubookGray hover:text-refubookActiveNav p-5" >
                        <img src={ar} alt="arabic" /> العربية
                    </button>
                </div>

                <div className="flex justify-between items-center">
                    <button type="button" className="text-refubookGray hover:text-refubookActiveNav p-5 " >
                        <img src={en} alt="english" /> English
                    </button>
                </div>

            </div>
        </div>
    </div>
  );
};

export default Footer;
