import React from "react";

const Navbar = () => (
  <div className="bg-white top-0 shadow">
    <nav className="md:mx-24 mx-auto">
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-4">
        <div className="pl-4">
          <a
            className="text-gray-900 md:text-2xl xl:text-xl no-underline hover:no-underline font-bold"
            href="#link"
          >
            SHOPOW
          </a>
        </div>
        <div className="block lg:hidden pr-4">
          <button
            id="nav-toggle"
            className="flex items-center p-1 text-orange-800 hover:text-gray-900"
          >
            <svg
              className="fill-current h-6 w-6"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 bg-white z-20"
          id="nav-content"
        >
          <ul className="list-reset lg:flex justify-end flex-1 items-center text-lg uppercase cursor-pointer">
            <li className="mr-3 hover:text-[gray]">
              <a href="#home" className="inline-block py-2 px-4">
                Home
              </a>
            </li>
            <li className="mr-3 hover:text-[gray]">
              <a href="#about" className="inline-block py-2 px-4">
                About
              </a>
            </li>
            <li className="mr-3 hover:text-[gray]">
              <a href="#cart" className="inline-block py-2 px-4">
                Cart
              </a>
            </li>
            <li className="mr-3 hover:text-[gray]">
              <a href="#login" className="inline-block py-2 px-4">
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
);

export default Navbar;
