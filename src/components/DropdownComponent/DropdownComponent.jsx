import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import cookies from 'js-cookie';
import classNames from 'classnames';
import { Dropdown } from "flowbite-react";

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
    code: 'ar',
    name: 'العربية',
    dir: 'rtl',
    countryCode: 'sa',
  },
];

export default function DropdownComponent() {

  const currentLanguageCode = cookies.get('i18next') || 'en';
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  const { t } = useTranslation();

  useEffect(() => {
    // console.log('Setting page stuff');
    document.body.dir = currentLanguage.dir || 'ltr';
    document.title = t('app_title');
  }, [currentLanguage, t]);

  return (
    <div className="p-20 ">

        <Dropdown label="Select Language" placement="top">
            <span className={`flag-icon flag-icon-${currentLanguage.countryCode} mx-2`} />

          <Dropdown.Item>
            <span className="dropdown-item-text" />{t('language')}
          </Dropdown.Item>

          {languages.map(({ code, name, countryCode }) => (
          <Dropdown.Item key={countryCode}>
            <a href="#/"
                      className={classNames('dropdown-item', {
                        disabled: currentLanguageCode === code,
                      })}
                      onClick={() => {
                        i18next.changeLanguage(code) 
                      }}
                    >
                      <span className={`flag-icon flag-icon-${countryCode} mx-2`} style={{ opacity: currentLanguageCode === code ? 0.5 : 1, }} />
                      {name}
            </a>
          </Dropdown.Item>

          ))}
        </Dropdown>
    </div>
  );
}
