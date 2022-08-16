import React from "react";
import Layout from "../components/Layout";

const overview = () => {
  return (
    <Layout>
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div className="bg-white h-60 shadow-md w-full  p-8 pt-9 bg-hero-pattern bg-no-repeat bg-center bg-cover">
          <div className="flex justify-between items-center">
            <div className="container text-white">
              <h2 className=" font-bold text-xl">
                Welcome to the Next JS CRM Demo
              </h2>
              <p className="text-md">
                This app runs in the browser, and relies on a mock REST API.{" "}
                <br></br> It was built using Next JS, React, Syncfusion React UI and Tailwind CSS.
              </p>
              <p className="text-md">
                Feel free to explore and modify the data - it is local to your
                computer, <br></br>and will reset each time you reload.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 flex flex-wrap justify-between gap-1 items-center">
        <div className="bg-white md:w-56 p-4 pt-4 shadow-md w-full"></div>
        <div className="bg-white md:w-56 p-4 pt-4 shadow-md w-full"></div>
        <div className="bg-white md:w-56 p-4 pt-4 shadow-md w-full"></div>
      </div>
    </Layout>
  );
};

export default overview;
