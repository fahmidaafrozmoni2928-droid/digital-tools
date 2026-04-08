import React from "react";

const BannerBottom = () => {
    return (
        <div className="bg-[#4F39F6] px-6 py-6  justify-center items-center space-x-25 mt-13 md:flex">

          <div className="text-center text-white md:text-white space-y-3 ">
            <h2 className="text-6xl font-bold ">50k+</h2>
            <p>Active Users</p>
          </div>

          <hr className=" hidden  md:block  h-12 border-l-2 border-white " ></hr>

          <div className="text-center text-white md:text-white space-y-3 ">
            <h2 className="text-6xl font-bold">200+</h2>
            <p>Premium Tools</p>
          </div>

          <hr className="hidden md:block h-12 border-l-2 border-white" ></hr>

          <div className="mr-25 text-center text-white md:text-white space-y-3">
            <h2 className="text-6xl font-bold">4.9</h2>
            <p>Rating</p>
          </div>


        </div>
    )
}
export default BannerBottom;