import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import cookies from 'js-cookie';
import classNames from 'classnames';

import React, { Fragment, useState, useEffect } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { BsChevronUp } from 'react-icons/bs';

const languages = [
  {
    code: 'fr',
    name: 'Français',
    countryCode: 'fr',
  },
  {
    code: 'en',
    name: 'English',
    countryCode: 'gb',
  },
  {
    code: 'tr',
    name: 'Turkish',
    countryCode: 'tr',
  },
  {
    code: 'ar',
    name: 'العربية',
    dir: 'rtl',
    countryCode: 'sa',
  },
];


/* import ar from '../../assets/ar.svg';
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
]; */

export default function DropdownComponent() {

  const currentLanguageCode = cookies.get('i18next') || 'en'
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  const { t } = useTranslation();

  useEffect(() => {
    // console.log('Setting page stuff')
    document.body.dir = currentLanguage.dir || 'ltr'
    document.title = t('app_title');
  }, [currentLanguage, t]);

  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  return (
    <div className="flex items-center justify-center relative">
      <Listbox value={selectedLanguage} onChange={setSelectedLanguage}>

        <Listbox.Button className="  flex items-center justify-between gap-2 font-medium z-40  bg-refubookBlue text-refubookWhite rounded-full py-2  md:px-10 px-3 cursor-pointer  duration-300 ease-in">
          <span className="text-sm md:text-lg "> {currentLanguage.name}</span>
          <span className={`flag-icon flag-icon-${currentLanguage.countryCode} mx-2`} />
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
            <Listbox.Option><span className="dropdown-item-text">{t('language')}</span></Listbox.Option>

            {languages.map(({ code, name, countryCode }) => (
              <Listbox.Option key={countryCode}>

                <button type='button' className={classNames('dropdown-item', {
                    disabled: currentLanguageCode === code,
                    })}
                    onClick={() => { i18next.changeLanguage(code) }}
                >
                    <span className={`flag-icon flag-icon-${countryCode} mx-2`} style={{ opacity: currentLanguageCode === code ? 0.5 : 1, }} />
                    {name}
                </button>

              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </Listbox>
    </div>
  );
}
