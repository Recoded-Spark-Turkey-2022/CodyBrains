import React, { useState } from 'react';
import OURTEAM from '../../data/ourTeamData'
import  COUNTRIES from '../../data/countries'

const OurTeam= ()=>{
    const [category, setCategory] = useState('View All');
  

    const Btn = COUNTRIES.map((country) => {
        const className =
          country === category
            ? ' inline-block w-32 py-1 border-solid border-2   text-white font-bold text-xl  '
            : ' w-32 py-1 mx-1 text-xl font-bold  lg:bg-transparent sm: border-gray-400 sm:  sm: text-gray-50';
        return (
          <div
            key={country}
            className={
              country === 'View All'
                ? 'max-lg:hidden p-3 flex justify-center'
                : 'p-3 flex justify-center'
            }
          >
            <button  type="button" className={className}  onClick={() => setCategory(country)}>
              {country}
            </button>
          </div>
        );
      });
      const ourTeamFilter = OURTEAM.filter(
        (member) => category === 'View All' || category === member.country
      );
      const memberTeamCard = ourTeamFilter.map((member) => {
        return (
          <div key={member.id} className="flex flex-col justify-start p-10 ">
            <h3 className="lg:text-xl lg:p-2 font-bold  sm:text-sm">
              {member.name}
            </h3>
            <p className="lg:text-xl  sm: text-xs">
              {member.job}
            </p>
          </div>
        );
      });
      return (
        <section name='ourteam' className="bg-emerald-50 pb-20 w-screen pt-10">
        {memberTeamCard}
        </section>
      );
}
export default OurTeam;