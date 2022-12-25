import { useForm } from 'react-hook-form';


const Contact = () => {
return (
    <div className="flex flex-col items-center w-full pb-10">
      <h1 className="text-center mt-10 text-7xl text-highlight">
        Get in Touch 
      </h1>
      
      <p className="text-center text-primary"> But Brooke Chaffin and Connors are looking to change that with the introduction   </p>
      <form action="#" className="flex flex-col items-center w-4/6">
        <div className="flex flex-col justify-between w-full mt-10 lg:flex-row">
          
          <div className="flex flex-col">
            <label htmlFor="email" className="pl-1.5 text-primary text-xl mb-1">
               Email
            </label>
            <input
              className="border border-primary placeholder-primary rounded-2xl h-11 w-full lg:w-56 bg-secondary placeholder-opacity-100 pl-1.5 box-border outline-none"
              type="email"
              id="email"
              placeholder="email"
            />
          </div>
         
        </div>
        <textarea
          className="border border-primary placeholder-primary mt-5 rounded-2xl resize-none bg-secondary placeholder-opacity-100 pl-1.5 pt-1 box-border outline-none w-full"
          name="message"
          rows="10"
          placeholder="Message"
        />
        <button
          className="mt-5  border-primary rounded-2xl w-28 h-10 text-primary bg-highlight active:bg-primary active:text-highlight font-medium"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );

};

export default Contact;
