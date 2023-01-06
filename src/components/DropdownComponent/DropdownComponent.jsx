import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import {  BsChevronDown } from 'react-icons/bs'; 

import ar from '../../assets/ar.png';
import en from '../../assets/en.png';
import tr from '../../assets/tr.png';



const languages = [
  { name: 'English', image:en},
  { name: 'Turkish', image:tr},
  { name: 'العربية',image:ar} 
]


export default function DropdownComponent() {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0])
  return (
      
      <Listbox value={selectedLanguage} onChange={setSelectedLanguage}>
      <div className="relative mt-1">
        <Listbox.Button className="flex items-center justify-between font-medium h-10  border border-refubookGray  rounded-full px-4  w-40 cursor-pointer  duration-300 ease-in" >
        <span className="block truncate text-refubookGray"> {selectedLanguage.name}</span>
        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <BsChevronDown
                className="h-5 w-5 text-refubookGray"
                aria-hidden="true"
              />
            </span>
            </Listbox.Button>
            <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className= " absolute mb-1 w-full  bg-white shadow-lg bottom-full  py-1 text-base   focus:outline-none sm:text-sm">
              {languages.map((language) => (
                <Listbox.Option
                  
                  className={({ active }) =>
                    `relative cursor-default text-refubookGray hover:bg-refubookAboutBlue select-none py-2 pl-10 pr-4 ${
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
                        <span className="absolute inset-y-0 left-0 flex items-center  text-refubookGray pl-3 text-amber-600"/>
                        
                      
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
