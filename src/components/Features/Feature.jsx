import React from 'react';
import star from '../../assets/star.svg';

const Feature = ({ item }) => {
  return (
    <div className=" max-w-sm flex flex-col items-center   gap-4 py-5">
      <div className="flex items-center justify-start w-full gap-4">
        <img src={star} alt="" />
        <h4 className="text-lg text-refubookLightBlack text-left font-bold">
          {item?.title}
        </h4>
      </div>
      <p className="text-md text-refubookLightBlack font-medium text-left">
        {item?.text}
      </p>
    </div>
  );
};

export default Feature;
