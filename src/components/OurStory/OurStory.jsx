import React from 'react';
import { useTranslation } from 'react-i18next';
import hands from '../../assets/hands.jpg';

const OurStory = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex justify-center items-center to-transparent h-1/2 w-100">
        <img className="w-1/2" src={hands} alt="" />
      </div>
      <section className="flex flex-col">
        <div className="px-40 mx-40 pb-20">
          <h2 className="text-5xl xl:text-6xl font-extrabold text-darkBlue mb-4 text-center">
            {t('Our_Story')}
          </h2>
          <p className="text-center px-15 mx-15 font-medium  text-xl max-w-screen">
            {t('Our_Story_Text')}
          </p>
        </div>
      </section>
    </>
  );
};
export default OurStory;
