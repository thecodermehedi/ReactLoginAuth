import {Link, NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-gray-900 text-gray-300 px-5 md:px-10 lg:px-20">
        <div className="navbar-start">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn bg-transparent text-white hover:bg-transparent border-none mr-2 lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-800 rounded-box w-52"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
          <Link
            to={"/"}
            className="text-2xl font-black text-blue-600 uppercase"
          >
            ReactLoginAuth
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal gap-4 px-1">
            <li className="cursor-pointer text-blue-600 underline text-xl">
              <a>Home</a>
            </li>
            <li className="cursor-pointer hover:text-blue-600 hover:underline text-xl">
              <a>About</a>
            </li>
            <li className="cursor-pointer hover:text-blue-600 hover:underline text-xl">
              <a>Contact</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-2">
          <NavLink
            to={"/login"}
            className="btn capitalize text-lg bg-transparent border border-blue-500 border-solid rounded-2xl hover:bg-blue-600 hover:border-transparent text-blue-500 focus:outline-none min-h-0 h-10 hover:text-white"
          >
            Sign in
          </NavLink>
          <NavLink
            to={"/signup"}
            className="btn capitalize text-lg hover:bg-transparent border hover:border-blue-500 border-solid rounded-2xl bg-blue-600 border-transparent hover:text-blue-500 focus:outline-none min-h-0 h-10 text-white"
          >
            Sign up
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
