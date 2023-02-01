import { useEffect, useState } from 'react';
import { Tab } from '@headlessui/react';
import { useTranslation } from 'react-i18next';
// import ourTeam from '../../data/ourTeamData';

const OurTeam = () => {
  const { t } = useTranslation();
  const [selectedTab, setSelectedTab] = useState('All');
  const [countries, setCountries] = useState([]);

  const ourTeam = [
    {
      name: t('Yasin'),
      job: t('Yasin_Job'),
      country: 'Turkey',
      id: 1,
      link: '',
    },
    {
      name: t('Helin'),
      job: t('Helin_Job'),
      country: 'Turkey',
      id: 2,
      link: '',
    },
    {
      name: t('Sara'),
      job: t('Sara_Job'),
      country: 'Turkey',
      id: 3,
      link: '',
    },
    {
      name: t('Yusuf'),
      job: t('Yusuf_Job'),
      country: 'Turkey',
      id: 4,
      link: '',
    },
    {
      name: t('Asmaa'),
      job: t('Asmaa_Job'),
      country: 'Turkey',
      id: 5,
      link: '',
    },
    {
      name: t('Salah'),
      job: t('Salah_Job'),
      country: 'Lebanon',
      id: 6,
      link: '',
    },
    {
      name: t('Kishi'),
      job: t('Kishi_Job'),
      country: 'USA',
      id: 7,
      link: '',
    },
    {
      name: t('Hiba'),
      job: t('Hiba_Job'),
      country: 'Lebanon',
      id: 8,
      link: '',
    },
    {
      name: t('Wissam'),
      job: t('Wissam_Job'),
      country: 'USA',
      id: 9,
      link: '',
    },
  ];

  useEffect(() => {
    // Extract unique countries from the team members data
    const uniqueCountries = Array.from(
      new Set(ourTeam.map((member) => member.country))
    );
    setCountries(uniqueCountries);
  }, []);

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }
  return (
    <section className="px-8 py-8 bg-refubookAboutBlue text-darkBlue font-bold w-full">
      <div className="container mx-auto">
        <div className="flex  items-center justify-center">
          <h1 className="text-4xl font-bold text-center">{t('Our_Team')}</h1>
        </div>
        <div className="hidden md:block mt-10">
          <Tab.Group>
            <Tab.List className="flex rounded-xl p-1 max-w-lg mx-auto mt-5 justify-center items-center w-full">
              <Tab
                key="All"
                selected={selectedTab === 'All'}
                onClick={() => setSelectedTab('All')}
                className={({ selected }) =>
                  classNames(
                    'w-full rounded-full py-2  text-sm font-medium  ',
                    'ring-refubookWhite ring-opacity-60 ring-offset-2 ring-offset-refubookBlue focus:outline-none focus:ring-2',
                    selected
                      ? 'bg-darkBlue  text-refubookAboutBlue shadow'
                      : ' hover:bg-refubookWhite/[0.12] hover:text-refubookBlack'
                  )
                }
              >
                {t('View_All')}
              </Tab>
              {countries.map((country) => (
                <Tab
                  key={country.id}
                  selected={selectedTab === country}
                  onClick={() => setSelectedTab(country)}
                  className={({ selected }) =>
                    classNames(
                      'w-full rounded-full py-2  text-sm font-medium  ',
                      'ring-refubookWhite ring-opacity-60 ring-offset-2 ring-offset-refubookBlue focus:outline-none focus:ring-2',
                      selected
                        ? 'bg-darkBlue  text-refubookAboutBlue shadow'
                        : ' hover:bg-refubookWhite/[0.12] hover:text-refubookBlack'
                    )
                  }
                >
                  {country} 
                  {/* {t('country')} */}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="mt-10">
              <Tab.Panel selected={selectedTab === 'All'}>
                <div className="px-4 md:px-48 md:mt-10 md:py-10 justify-self-center items-center w-full mx-auto grid grid-cols-2 gap-16 md:grid-cols-3 md:gap-20">
                  {ourTeam.map((member) => (
                    <div
                      key={member.name}
                      className="flex flex-col items-center justify-center w-full md:ml-8"
                    >
                      <p className="font-medium w-full">{member.name}</p>
                      <p className="font-normal  w-full"> {t(member.job)}</p>
                    </div>
                  ))}
                </div>
              </Tab.Panel>
              {countries.map((country) => (
                <Tab.Panel
                  key={country}
                  selected={selectedTab === country}
                  className="mx-auto"
                >
                  <div className="px-4 md:px-48 md:mt-10 md:py-10 items-center justify-center grid grid-cols-2 gap-16 md:grid-cols-3 md:gap-20">
                    {ourTeam
                      .filter((member) => member.country === country)
                      .map((member) => (
                        <div
                          key={member.name}
                          className="flex flex-col items-center justify-center w-full"
                        >
                          <p className="font-medium  w-full">{member.name}</p>
                          <p className="font-normal  w-full">{member.job}</p>
                        </div>
                      ))}
                  </div>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
        <div className="block md:hidden mt-10">
          <Tab.Group>
            <Tab.List className="flex flex-col rounded-xl p-1 max-w-lg mx-auto mt-5 justify-center items-center w-full">
              <Tab
                key="All"
                selected={selectedTab === 'All'}
                onClick={() => setSelectedTab('All')}
                className={({ selected }) =>
                  classNames(
                    ' w-28 py-2 rounded-full   text-sm font-medium  ',
                    'ring-refubookWhite ring-opacity-60 ring-offset-2 text-refubookWhite  ring-offset-refubookBlue focus:outline-none focus:ring-2',
                    selected
                      ? 'bg-refubookTeamLightRed  shadow'
                      : ' bg-refubookGray hover:text-refubookBlack'
                  )
                }
              >
                {t('View_All')}
              </Tab>
              <Tab.Panel selected={selectedTab === 'All'}>
                <div className="px-4 md:px-48 md:mt-10 md:py-10 justify-self-center items-center w-full mx-auto grid grid-cols-2 gap-16 md:grid-cols-3 md:gap-20">
                  {ourTeam.map((member) => (
                    <div
                      key={member.name}
                      className="flex flex-col items-center justify-center mt-5 w-full md:ml-8"
                    >
                      <p className="font-medium w-full">{member.name}</p>
                      <p className="font-normal  w-full">{member.job}</p>
                    </div>
                  ))}
                </div>
              </Tab.Panel>
            </Tab.List>
            <Tab.List className="flex flex-col rounded-xl p-1 max-w-lg mx-auto mt-5 justify-center items-center w-full">
              {countries.map((country) => (
                <div className="flex flex-col rounded-xl p-1 max-w-lg mx-auto mt-5 justify-center items-center w-full">
                  <Tab
                    key={country}
                    selected={selectedTab === country}
                    onClick={() => setSelectedTab(country)}
                    className={({ selected }) =>
                      classNames(
                        ' w-28 py-2 rounded-full   text-sm font-medium text-refubookWhite  ',
                        'ring-refubookWhite ring-opacity-60 ring-offset-2 ring-offset-refubookBlue focus:outline-none focus:ring-2',
                        selected
                          ? 'bg-refubookTeamLightRed   shadow'
                          : ' bg-refubookGray hover:text-refubookBlack'
                      )
                    }
                  >
                    {country}
                    {/* {t('country')} */}
                  </Tab>

                  <Tab.Panel
                    key={country}
                    selected={selectedTab === country}
                    className="mx-auto"
                  >
                    <div className="px-4 md:px-48 md:mt-10 md:py-10 items-center justify-center grid grid-cols-2 gap-16 md:grid-cols-3 md:gap-20">
                      {ourTeam
                        .filter((member) => member.country === country)
                        .map((member) => (
                          <div
                            key={member.name}
                            className="flex flex-col items-center mt-5 justify-center w-full"
                          >
                            <p className="font-medium  w-full">{member.name}</p>
                            <p className="font-normal  w-full">{member.job}</p>
                          </div>
                        ))}
                    </div>
                  </Tab.Panel>
                </div>
              ))}
            </Tab.List>
          </Tab.Group>
        </div>
      </div>
    </section>
  );
};
export default OurTeam;
