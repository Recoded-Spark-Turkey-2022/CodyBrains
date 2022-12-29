import React from 'react';
import ar from '../../assets/ar.png';
import en from '../../assets/en.png';
import tr from '../../assets/tr.png';

export default function DropdownComponent() {
  return (
    <div className="p-20 ">
      <div className="group inline-block relative border border-refubookActiveNav rounded-xl ">
        <button type="button" className="rounded inline-flex items-center ">
          <span className="mr-1 ">Language</span>
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </button>
        <ul className="absolute hidden text-refubookGray pt-1 group-hover:block">
          <li className="flex items-center">
            <button
              type="button"
              className="text-refubookGray hover:text-refubookActiveNav p-2"
            >
              <img src={ar} alt="arabic" /> العربية
            </button>
          </li>
          <li className="flex items-center">
            <button
              type="button"
              className="text-refubookGray hover:text-refubookActiveNav "
            >
              <img src={en} alt="english" /> English
            </button>
          </li>
          <li className="flex items-center">
            <button
              type="button"
              className="text-refubookGray hover:text-refubookActiveNav "
            >
              <img src={tr} alt="turkish" /> Türkçe
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
