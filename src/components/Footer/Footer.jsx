import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../../assets/logo.svg';
import DropdownComponent from '../DropdownComponent/DropdownComponent';
// import Local from '../Local/Local';


const Footer = () => {
  const { t } = useTranslation();
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
               {t('Home')}
            </Link>
          </li>

          <li className="mr-6">
            <Link
              to="/about"
              className="text-refubookGray hover:text-refubookActiveNav font-medium"
            >
              {t('About')}
            </Link>
          </li>

          <li className="mr-6">
            <Link
              to="/contact"
              className="text-refubookGray hover:text-refubookActiveNav font-medium"
            >
              {t('Contact')}
            </Link>
          </li>

          <li className="mr-6">
            <Link
              to="/blog"
              className="text-refubookGray hover:text-refubookActiveNav font-medium"
            >
              {t('Blog')}
            </Link>
          </li>
        </ul>
      </div>
      
      <Link to="/signup">
          <button
            type="button"
            className="px-1 md:py-2 md:px-3 bg-refubookBlue text-refubookWhite font-medium   rounded-full shadow-lg hover:bg-refubookWhite hover:text-refubookBlack transition duration-500 ease-in-out"
          >
            {t('Sign_Up')}
          </button>
        </Link>
      
      {/* <Local /> */}
      <DropdownComponent />
    </div>
  );
};

export default Footer;
