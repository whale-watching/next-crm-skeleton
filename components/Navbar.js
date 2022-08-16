/* eslint-disable @next/next/no-img-element */
import React,{useEffect} from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import {
  SearchIcon,
  ChatIcon,
  BellIcon,
  MenuIcon,
} from "@heroicons/react/outline";
import {useStateContext} from '../context/ContextProvider';

function Navbar() {
  const { data: session } = useSession();
  const { currentColor, activeMenu, setActiveMenu, handleClick, isClicked, setScreenSize, screenSize } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  const handleActiveMenu = () => setActiveMenu(!activeMenu);
  return (
    <nav className="bg-white shadow px-4 lg:px-6 py-2.5 dark:bg-gray-800">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        {/* <MenuIcon className={` cursor-pointer flex items-center mr-3 h-6 sm:h-9  ${
                  setActiveMenu ? "translate-x-0" : "translate-x-full"
                }`} 
        onClick={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}/> */}
        <div className="w-1/2 flex-1">
          <div className="hidden lg:w-auto lg:flex  lg:order-1 relative mt-1 p-3 rounded-md">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-4 text-gray-500" />
            </div>
            <input
              className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="flex items-center justify-end lg:order-2">
          <ChatIcon className="h-6 w-8" />
          <BellIcon className="h-6 w-8" />
          <img
                onClick={() => signOut({ callbackUrl: "/auth/signin" })}
                src={"https://avatars.githubusercontent.com/u/30241396?v=4"}
                alt="profile pic"
                className="h-8 rounded-full cursor-pointer"
              />
          <a
            href="#"
            className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            onClick={signIn}          
          >
            Log in
          </a>
        </div>
       
      </div>
    </nav>
  );
}

export default Navbar;
