import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../../assets/logo.svg';
import { LanguagesMenu } from '..';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col  gap-5 px-14 py-6 mb-6 lg:flex-row  w-full bg-refubookWhite mt-10">
      <div className="items-center justify-center flex mr-6">
        <Link
          to="/"
          className="text-refubookBlue font-bold text-xl tracking-tight "
        >
          <img src={logo} alt="logo" className="w-10 h-10" />
        </Link>
      </div>

      <ul className="flex justify-center gap-5 items-center text-md md:text-lg xl:text-xl 2xl:text-2xl  w-full">
        <li>
          <Link
            to="/"
            className="text-refubookGray hover:text-refubookActiveNav font-medium"
          >
            {t('Home')}
          </Link>
        </li>

        <li>
          <Link
            to="/about"
            className="text-refubookGray hover:text-refubookActiveNav font-medium"
          >
            {t('About')}
          </Link>
        </li>

        <li>
          <Link
            to="/contact"
            className="text-refubookGray hover:text-refubookActiveNav font-medium"
          >
            {t('Contact')}
          </Link>
        </li>

        <li>
          <Link
            to="/blog"
            className="text-refubookGray hover:text-refubookActiveNav font-medium"
          >
            {t('Blog')}
          </Link>
        </li>
      </ul>

      <div className="flex w-full justify-center gap-5 md:gap-10  lg:justify-end">
        <Link to="/signup">
          <button
            type="button"
            className=" flex items-center w-32 md:w-full justify-center font-medium z-40 text-xs md:text-lg bg-refubookBlue text-refubookWhite rounded-full py-3 md:py-2.5  md:px-10 px-6 cursor-pointer  duration-300 ease-in"
          >
            {t('Sign_Up')}
          </button>
        </Link>
        <LanguagesMenu />
      </div>
    </div>
  );
};

export default Footer;
