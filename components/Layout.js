import React from "react";
import Navbar from "./Navbar";
import Settings from "./Settings";
import Sidebar from "./Sidebar";
import Sidebar2 from "./Sidebar2";

const Layout = ({ children }) => {
  return (
    <div className="h-screen flex flex-row justify-start"> 
     <Sidebar />
      <div className="bg-gray-50  flex-1 p-4 text-black">
        <Navbar/>
        <div className="mt-8">
           {children}
        </div>
       
        </div>
    </div>
  );
};

export default Layout;
