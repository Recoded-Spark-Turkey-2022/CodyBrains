import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import contactImg from '../../assets/contact-draw.svg';
import socialIcons from '../../assets/SocialMedia.svg';

const Contact = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = () => {
    Swal.fire('Your message has been send successfuly');
  };
  return (
    <div className="container  bg-refubookAboutBlue rounded-3xl shadow-2xl m-auto xl:my-0 md:my-8 px-4 md:px-16 flex flex-col-reverse  md:flex-row justify-evenly items-center">
      <div className="flex flex-col items-center lg:items-start justify-center px-2 md:px-0">
        <h1 className="text-5xl xl:text-6xl font-extrabold  pt-5 mt-5 py-1  text-refubookBlue text-center lg:text-left">
          Get in Touch
        </h1>
        <p className="text-base  mt-5 py-1 text-refubookLightBlack  w-full lg:w-3/5 text-center lg:text-left">
          But Brooke Chaffin and Connors are looking to change that with the
          introduction
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col  items-center lg:items-start  w-full "
        >
          <div className="flex flex-col justify-between w-full mt-5 lg:flex-row">
            <div className="flex flex-col  w-full ">
              <label
                htmlFor="email"
                className="pl-1.5  text-refubookLightBlue  text-xl  mt-5 py-1"
              >
                Email
                <input
                  id="email"
                  className="relative block h-14 w-full  bg-refubookWhite placeholder-opacity-100 pl-1.5 box-border "
                  type="email"
                  placeholder="example@gamil.com"
                  {...register('email')}
                />
              </label>
            </div>
          </div>

          <textarea
            className=" mt-5   resize-none bg-secondary placeholder-opacity-100  pl-1.5 pt-1 box-border  w-full"
            name="message"
            rows={10}
            placeholder="Message"
            required
          />

          <div>
            <button
              type="submit"
              className="flex justify-center lg:justify-start  py-1 px-3  mt-5  md:py-2 md:px-9  bg-refubookBlue text-refubookWhite font-bold text-lg md:text-xl  rounded-full shadow-lg hover:bg-refubookWhite hover:text-refubookBlack transition duration-500 ease-in-out"
            >
              Send
            </button>
          </div>
        </form>

        <div className="flex justify-center lg:justify-start  py-5 ">
          <img src={socialIcons} alt="" />
        </div>
      </div>
      <div className="flex justify-center lg:justify-end">
        <img src={contactImg} alt="" />
      </div>
    </div>
  );
};

export default Contact;
