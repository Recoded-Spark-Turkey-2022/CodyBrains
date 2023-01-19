import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import hug from '../../assets/hug.png';

const SignUp = () => {
  const { t } = useTranslation();
  return (
    <section className="flex flex-col">
      <div className=" mx-20 pb-20 grid place-items-center">
        <img className="w-60" src={hug} alt="" />
        <h2 className="text-2xl xl:text-4xl text-refubookBlue mb-4 text-center">
          {t('Share_Your_Story')}
        </h2>
        <p className="text-center pt-7 pb-5 px-15 mx-15 text-refubookGray font-medium  text-l max-w-screen">
          {t('Share_Your_Story_Content')}
        </p>

        <Link to="/signup">
          <button
            type="button"
            className="py-1 px-3 md:py-2 md:px-9 bg-refubookBlue text-refubookWhite font-bold text-lg md:text-xl  rounded-full shadow-lg hover:bg-refubookWhite hover:text-refubookBlack transition duration-500 ease-in-out"
          >
            {t('Sign_Up')}
          </button>
        </Link>
      </div>
    </section>
  );
};
export default SignUp;
