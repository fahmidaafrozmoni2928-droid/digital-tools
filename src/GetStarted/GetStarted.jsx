import React from "react"; 
import userImg from '../assets/user.png'
import packageImg from '../assets/package.png'
import rocketImg from '../assets/rocket.png'
const GetStarted = () => {
    return (
        <div className="bg-[#A2DDFD]/5 px-10 py-10 mt-15">
        <div>
        <div className="space-y-3 ">
          <h1 className="text-4xl font-bold text-center">Get Started in 3 Steps</h1>
          <p className="text-gray-600 text-center">Start using premium digital tools in minutes, not hours.</p>
          </div>
        </div>
        <div className="pt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-20">
            <div className="card-1">
            

          <div>
          <div className="card bg-base-100 w-96 shadow-sm">
            <div className="flex justify-end pr-4 pt-4">
            <p className=" rounded-full text-white w-12 h-12  bg-[#4F39F6] flex items-center justify-center">01</p>
            </div>
  <figure className="px-10 pt-10">
    <img
      src= {userImg}
      alt= {userImg}
      className="rounded-full w-20 h-20 bg-[#A2DDFD]/10" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Create Account</h2>
    <p className="text-gray-600">Sign up for free in seconds. No credit card required to get started.</p>
    
  </div>
</div>
          </div>
          </div>


            <div className="card-2">
             <div>
          <div className="card bg-base-100 w-96 shadow-sm">
            <div className="flex justify-end pr-4 pt-4">
            <p className=" rounded-full text-white w-12 h-12  bg-[#4F39F6] flex items-center justify-center">02</p>
            </div>
  <figure className="px-10 pt-10">
    <img
      src= {packageImg}
      alt= {packageImg}
      className="rounded-full w-20 h-20 bg-[#A2DDFD]/10" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Choose Products</h2>
    <p className="text-gray-600">Browse our catalog and select the tools that fit your needs.</p>
    
  </div>
</div>
          </div>
          </div>



            <div className="card-3">
     <div>
          <div className="card bg-base-100 w-96 shadow-sm">
            <div className="flex justify-end pr-4 pt-4">
            <p className=" rounded-full text-white w-12 h-12  bg-[#4F39F6] flex items-center justify-center">03</p>
            </div>
  <figure className="px-10 pt-10">
    <img
      src= {rocketImg}
      alt= {rocketImg}
      className="rounded-full w-20 h-20 bg-[#A2DDFD]/10" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Start Creating</h2>
    <p className="text-gray-600">Download and start using your premium tools immediately.</p>
    
  </div>
</div>
          </div>
          </div>


        </div>
        </div>
    )
}
export default GetStarted;