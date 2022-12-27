import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import validationSchema from '../../utils/validation';

const LoginForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onBlur',
  });
  return (
    <form
      className="flex flex-col pt-3 md:pt-8  "
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="form-group">
        <label htmlFor="email">
          Email address
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 focus:outline-none focus:border-refubookBlue mb-3 "
            {...register('email')}
          />
        </label>
        <p>{errors.email?.message}</p>
      </div>
      <div className="form-group">
        <label htmlFor="password">
          Password
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 focus:outline-none focus:border-refubookBlue mb-3 "
            {...register('password')}
          />
        </label>
        <p>{errors.password?.message}</p>
      </div>

      <button
        type="submit"
        className=" className='group relative flex w-full justify-center rounded-md border border-transparent bg-refubookBlue py-2 px-4 text-sm font-medium mt-8 text-white hover:bg-refubookLightBlue focus:outline-none focus:ring-2 focus:ring-[#331416] focus:ring-offset-2'"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
