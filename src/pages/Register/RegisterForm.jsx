import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import { MdDriveFolderUpload } from 'react-icons/md';
import validationSchema from '../../utils/validation';
import useFirebaseFileUpload from '../../hooks/useFileUpload';

const RegisterForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onBlur',
  });

  const { file, handleFileChange, percentage } = useFirebaseFileUpload;
  return (
    <form
      className="flex flex-col pt-3 md:pt-8  "
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="grid grid-cols-2 items-center justify-center gap-2">
        <div className="text-center">
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
        <div className="text-center">
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
        <div className="text-center">
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
        <div className="text-center">
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
        <div className="text-center flex items-center justify-center">
          <img
            src={
              file
                ? URL.createObjectURL(file)
                : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'
            }
            alt=""
            className="w-32 h-32 rounded-full"
          />
        </div>
        <div className="flex flex-row-reverse w-full items-center justify-center gap-4">
          <label
            htmlFor="photoURL"
            className="flex flex-col-reverse items-center gap-2"
          >
            Please upload a profile picture
            <MdDriveFolderUpload className="text-5xl text-refubookBlue" />
            <input
              type="file"
              id="photoURL"
              name="photoURL"
              className="hidden"
              {...register('photoURL')}
              onChange={handleFileChange}
            />
            {percentage > 0 && (
              <div className="w-full h-2 bg-gray-300 rounded-full">
                <div
                  className="h-full bg-refubookBlue rounded-full"
                  style={{ width: `${percentage}%` }}
                />
              </div>
            )}
          </label>
        </div>
        <p>{errors.photoURL?.message}</p>
      </div>
      <button
        type="submit"
        className=" className='group relative flex w-full justify-center rounded-md border border-transparent bg-refubookBlue py-2 px-4 text-sm font-medium mt-8 text-white hover:bg-refubookLightBlue focus:outline-none focus:ring-2 focus:ring-[#331416] focus:ring-offset-2'"
      >
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
