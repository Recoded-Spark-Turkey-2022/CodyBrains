import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../../assets/logo.svg';

const NotFound = () => {

  const { t } = useTranslation();

  return (
    <div className="min-h-full pt-16 pb-12 flex flex-col bg-white">
      <main className="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex-shrink-0 flex justify-center">
          <Link to="/" className="inline-flex">
            <span className="sr-only">{t('Workflow')}</span>
            <img className="h-12 w-auto" src={logo} alt="" />
          </Link>
        </div>
        <div className="py-16">
          <div className="text-center">
            <p className="text-sm font-semibold text-refubookBlue uppercase tracking-wide">
              {t('404_Error')}
            </p>
            <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
              Page not found.
            </h1>
            <p className="mt-2 text-base text-refubookGray">
              {t('404_Error_Text')}
            </p>
            <div className="mt-6">
              <Link
                to="/"
                className="text-base font-medium text-refubookBlue hover:text-refubookActiveNav"
              >
                {t('404_Error_Go_Back')}<span aria-hidden="true"> &rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
