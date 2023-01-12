import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { BsChevronUp } from 'react-icons/bs';

import ar from '../../assets/ar.svg';
import en from '../../assets/en.svg';
import tr from '../../assets/tr.svg';

const languages = [
  {
    name: 'English',
    flag: en,
  },
  {
    name: 'العربية',
    flag: ar,
  },
  {
    name: 'Turkish',
    flag: tr,
  },
];

export default function DropdownComponent() {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  return (
    <div className="flex items-center justify-center relative">
      <Listbox value={selectedLanguage} onChange={setSelectedLanguage}>
        <Listbox.Button className="  flex items-center justify-between gap-2 font-medium z-40  bg-refubookBlue text-refubookWhite rounded-full py-2  md:px-10 px-3 cursor-pointer  duration-300 ease-in">
          <span className="text-sm md:text-lg "> {selectedLanguage.name}</span>
          <BsChevronUp className="w-5 h-5" />
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          enter="transition ease-out duration-100"
          enterFrom="opacity-0"
          enterTo="opacity-100"
        >
          <Listbox.Options className="absolute w-full z-10 bottom-9   bg-refubookWhite shadow-lg  rounded-tl-md rounded-tr-md  rounded-bl-lg rounded-br-lg  py-2  ring-2 ring-refubookBlue ring-opacity-25 overflow-hidden focus:outline-none sm:text-sm">
            {languages.map((language) => (
              <Listbox.Option
                key={language.name}
                className={({ active }) =>
                  `${
                    active
                      ? 'text-refubookWhite bg-refubookBlue'
                      : 'text-refubookBlack'
                  }
                          cursor-pointer select-none relative py-2 pl-4 pr-4 w-full`
                }
                value={language}
              >
                <div className="flex items-center justify-between w-full ">
                  <img
                    src={language.flag}
                    alt={language.name}
                    className="w-6 h-6 object-cover rounded-full"
                  />
                  <span className="text-xs md:text-lg ">{language.name}</span>
                </div>
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </Listbox>
    </div>
  );
}
