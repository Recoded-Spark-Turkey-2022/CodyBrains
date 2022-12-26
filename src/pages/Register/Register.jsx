import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { v4 as uuidv4 } from 'uuid';
import Swal from 'sweetalert2';
import { registerUser } from '../../features/userSlice';
import logo from '../../assets/logo.svg';
import avatar from '../../assets/avatar.svg';
import validationSchema from '../../utils/validation';

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [picture, setPicture] = useState(avatar);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'all',
  });

  const onSubmit = (data) => {
    dispatch(
      registerUser({
        uid: uuidv4(),
        email: data.email,
        password: data.password,
        displayName: data.displayName,
        photoURL: picture,
      })
    );
    if (data) {
      Swal.fire({
        title: 'Success!',
        text: 'You have successfully registered! Redirecting to home page...',
        timer: 2000,
        timerProgressBar: true,
        icon: 'success',
        showConfirmButton: false,
      });
      setTimeout(() => {
        navigate('/');
      }, 2000);
    }
  };
  return (
    <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img className="mx-auto h-12 w-auto" src={logo} alt="Refubook" />

            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Create an account
            </h2>
            <div className="mt-2 text-center text-sm text-gray-600">
              Or{' '}
              <Link
                to="/login"
                className="font-medium text-refubookBlue hover:text-refubookLightBlue"
              >
                Log in to your account
              </Link>
            </div>
          </div>

          <form
            className="flex flex-col gap-2 "
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="form-group">
              <label htmlFor="displayName">
                Username
                <input
                  type="text"
                  id="displayName"
                  placeholder="Enter username"
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 focus:outline-none focus:border-refubookBlue mb-3 "
                  {...register('displayName')}
                />
              </label>
              <p>{errors.displayName?.message}</p>
            </div>
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
            <div className="form-group">
              <label htmlFor="password2">
                Confirm Password
                <input
                  type="password"
                  id="password2"
                  name="password2"
                  placeholder="Confirm Password"
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 focus:outline-none focus:border-refubookBlue mb-3 "
                  {...register('password2')}
                />
              </label>
              <p>{errors.password2?.message}</p>
            </div>
            <div className="form-group">
              <label htmlFor="photoURL">
                Avatar (optional)
                <input
                  type="file"
                  name="photoURL"
                  id="photoURL"
                  onChange={(e) =>
                    setPicture(URL.createObjectURL(e.target.files[0]))
                  }
                  placeholder="Avatar"
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 focus:outline-none focus:border-refubookBlue mb-3 "
                  {...register('photoURL')}
                />
              </label>
            </div>
            <button
              type="submit"
              className=" className='group relative flex w-full justify-center rounded-md border border-transparent bg-refubookBlue py-2 px-4 text-sm font-medium mt-4 text-white hover:bg-refubookLightBlue focus:outline-none focus:ring-2 focus:ring-[#331416] focus:ring-offset-2'"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
