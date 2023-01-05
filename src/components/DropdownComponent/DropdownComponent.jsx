import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { BsCheck } from 'react-icons/bs'

import ar from '../../assets/ar.png';
import en from '../../assets/en.png';
import tr from '../../assets/tr.png';



const languages = [
  { name: 'English', image:{en}},
  { name: 'Turkish', image:{tr}},
  { name: 'العربية',image:{ar}} 
]


export default function DropdownComponent() {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0])
  return (
      
      <Listbox value={selectedLanguage} onChange={setSelectedLanguage}>
      <div className="relative mt-1">
        <Listbox.Button className="py-1 px-3 md:py-2 md:px-9 bg-refubookBlue text-refubookWhite font-bold text-lg md:text-xl  rounded-full shadow-lg hover:bg-refubookWhite hover:text-refubookBlack transition duration-500 ease-in-out" >
        <span className="block truncate"> {selectedLanguage.name}</span>
           
            </Listbox.Button>
            <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {languages.map((language) => (
                <Listbox.Option
                  
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                    }`
                  }
                  value={language}
                >
                  
                    <>
                      <span
                        className={`block truncate ${
                          selectedLanguage ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {language.name}
                        <img src={language.image} alt="" />
                      </span>
                      {selectedLanguage ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <BsCheck className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    
  );
}
