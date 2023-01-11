
import React, { useState } from 'react';
import OURTEAM from '../../data/ourTeamData'
// import  COUNTRIES from '../../data/countries'

const OurTeam= ()=>{
  const [selectedCountry, setSelectedCountry] = useState('all');
    function handleClick(e){

      setSelectedCountry(e.target.value)
      console.log(selectedCountry)
    }
    function filterArray(array) {
      const filteredArray = array.filter(country=>country.country===selectedCountry);
      return filteredArray.length > 0 ? filteredArray : [...array];
    }
      return (
        <section  name='ourteam' className="px-8 py-8 bg-refubookAboutBlue text-darkBlue font-bold w-full">
          <h2 className="text-5xl xl:text-6xl mb-4 text-center">Our Team</h2>
          <div className="py-3 space-x-10 flex justify-center">
          <button className={`${selectedCountry === "all" ? "cursor-pointer text-sm md:text-base mr-2 md:mr-8 rounded-full py-1 px-4 font-medium bg-refubookBlue text-refubookWhite" : ""}`} value="all" type="button" onClick={handleClick} tabIndex="0">View All</button>
          <button className={`${selectedCountry === "Turkey" ? "cursor-pointer text-sm md:text-base mr-2 md:mr-8 rounded-full py-1 px-4 font-medium bg-refubookBlue text-refubookWhite" : ""}`} value="Turkey" type="button" onClick={handleClick} tabIndex="0">Turkey</button>
          <button className={`${selectedCountry === "Lebanon" ? "cursor-pointer text-sm md:text-base mr-2 md:mr-8 rounded-full py-1 px-4 font-medium bg-refubookBlue text-refubookWhite" : ""}`} value="Lebanon" type="button" onClick={handleClick} tabIndex="0">Lebanon</button>
          <button className={`${selectedCountry === "USA" ? "cursor-pointer text-sm md:text-base mr-2 md:mr-8 rounded-full py-1 px-4 font-medium bg-refubookBlue text-refubookWhite" : ""}`} value="USA" type="button" onClick={handleClick} tabIndex="0">USA</button>
          </div>
          <div className='px-4 md:px-48 text-left grid grid-cols-2 gap-16 md:grid-cols-3 md:gap-32'>
          {filterArray(OURTEAM).map(filteredCountry => (
            <ul>
            <li>
            <h4>{filteredCountry.name}</h4>
            <p  className="font-normal">{filteredCountry.job}</p>
            </li>
            </ul>
           

          ))}
          </div>
    
        </section>
      );
}
export default OurTeam;