import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import ContactImg from '../../assets/contact-draw.svg';
import SocialIcons from '../../assets/SocialMedia.svg';
import Union from '../../assets/Union.svg';

const Contact = () => {

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const { handleSubmit } = useForm();


  const { register, handleSubmit } = useForm();

  const onSubmit = () => {
    Swal.fire({
      title: 'Thank you for your message!',
      text: 'We will get back to you as soon as possible.',
      icon: 'success',
      confirmButtonText: 'OK',
    });

    setEmail('');
    setMessage('');
  };

  return (
    <div className="container  bg-refubookAboutBlue rounded-3xl shadow-2xl m-auto pt-4 pb-4 xl:my-0 md:my-8 px-4 md:px-16 flex flex-col-reverse  md:flex-row justify-evenly items-center">
      <div className="flex flex-col items-center lg:items-start justify-center px-2  md:px-0">
        <h1 className="text-5xl xl:text-6xl font-extrabold  pt-5 mt-5 py-1  text-refubookBlue text-center lg:text-left">
          Get in Touch
        </h1>
        <p className="text-base  mt-5 py-1 text-refubookLightBlack font-medium  w-full lg:w-3/5 text-center lg:text-left">
          We are always ready to help you. If you have any questions, please
          feel free to contact us.
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col  items-center lg:items-start w-full  md:w-4/6"
        >
          <div className="flex flex-col justify-between w-full mt-5 lg:flex-row">
            <div className="flex flex-col  w-full items-center justify-center ">
              <label
                htmlFor="email"
                className="  text-refubookLightBlue  text-xl  mt-5 py-1 w-full"
              >
                Email
                <input
                  id="email"
                  className="mt-2 bg-refubookWhite text-refubookBlack rounded-md shadow-md placeholder-opacity-100 p-2 box-border  w-full focus:outline-none focus:ring-2 focus:ring-refubookBlue focus:border-transparent"
                  type="email"
                  placeholder="example@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </label>
            </div>
          </div>

          <label
            htmlFor="message"
            className="text-refubookLightBlue text-xl mt-5 py-1 w-full"
          >
            Message
            <textarea
              className=" mt-5 bg-refubookWhite text-refubookBlack rounded-md shadow-md placeholder-opacity-100 p-2 box-border  w-full focus:outline-none focus:ring-2 focus:ring-refubookBlue focus:border-transparent"
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </label>
          <div>
            <button
              type="submit"
              className="flex justify-center items-center lg:justify-start px-10 py-1 mt-5  bg-refubookBlue text-refubookWhite font-bold text-md md:text-lg  rounded-full shadow-lg hover:bg-refubookWhite hover:text-refubookBlack transition duration-500 ease-in-out"
            >
              Send
            </button>
          </div>
        </form>

        <div className="flex justify-center items-center lg:justify-start  py-5 ">
          <img src={SocialIcons} alt="" />
        </div>
      </div>
      <div className="basis-1/2 m-auto w-6/12">
        <img src={ContactImg} alt="" className=" flex justify-end sm:hidden" />
        <img
          src={Union}
          alt=""
          className="hidden  sm:flex justify-center items-center "
        />
      </div>
    </div>
  );
};

export default Contact;
