
function Navbar() {

  return (

    <div className="z-10 flex flex-col md:flex-row items-center justify-center md:justify-between flex-wrap bg-transparent p-4">

      <div className="mx-auto mt-4 md:mt-1 mb-4 md:mb-1 px-16 flex justify-center items-center flex-shrink-0 text-white justify-center">
        <div className="text-blue-400 font-bold text-xl tracking-tight" to="/">
          Refubook
        </div>
      </div>

      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <ul className="flex justify-center">
          <li className="mr-6">
            <div className="text-gray-500 hover:text-blue-400 font-medium" to="/">
              Home
            </div>
          </li>

          <li className="mr-6">
            <div className="text-gray-500 hover:text-blue-400 font-medium" to="/about">
              About
            </div>
          </li>

          <li className="mr-6">
            <div className="text-gray-500 hover:text-blue-400 font-medium" to="/blog">
              Blog
            </div>
          </li>

          <li className="mr-6">
            <div className="text-gray-500 hover:text-blue-400 font-medium" to="/contact">
              Contact
            </div>
          </li>

        </ul>

      </div>

    </div>

  );
}

export default Navbar;