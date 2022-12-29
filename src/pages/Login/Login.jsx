import { Link } from 'react-router-dom';
import Providers from '../Providers/Providers';
import blueVector from '../../assets/blue-baloon.svg';

const Login = () => {
  return (
    <div className="w-full flex items-center justify-center h-full relative">
      <img
        src={blueVector}
        alt="blueVector"
        className="absolute top-0 left-0"
      />
      <div className="flex flex-col items-center justify-center w-full max-w-md bg-refubookWhite">
        <h3 className="text-refubookBlue text-2xl font-bold tracking-tight text-center">
          SIGN UP WITH
        </h3>
        <Providers />
      </div>
      <div className="mx-auto text-center">
        <p className="hidden md:flex gap-2 text-md text-refubookAuthBlue">
          Already a member?{' '}
          <span className="text-refubookBlue">
            <Link to="/login">Sign in</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
