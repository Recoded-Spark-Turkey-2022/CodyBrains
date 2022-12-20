
function Navbar() {

  return (

    <div className=" flex items-center justify-center flex-wrap bg-transparent p-5">

      <div className="px-16 flex justify-center items-center justify-center">
        <div className="text-refubookBlue font-bold text-xl tracking-tight" to="/">
          Refubook
        </div>
      </div>

      <div className="flex-grow flex items-center">
        <ul className="flex justify-center">
          <li className="mr-6">
            <div className="text-refubookGray hover:text-refubookActiveNav font-medium" to="/">
              Home
            </div>
          </li>

          <li className="mr-6">
            <div className="text-refubookGray hover:text-refubookActiveNav font-medium" to="/about">
              About
            </div>
          </li>

          <li className="mr-6">
            <div className="text-refubookGray hover:text-refubookActiveNav font-medium" to="/blog">
              Blog
            </div>
          </li>

          <li className="mr-6">
            <div className="text-refubookGray hover:text-refubookActiveNav font-medium" to="/contact">
              Contact
            </div>
          </li>

        </ul>

      </div>

    </div>

  );
}

export default Navbar;