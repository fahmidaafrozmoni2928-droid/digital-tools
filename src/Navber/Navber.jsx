import React from "react";
import { FaShoppingCart } from "react-icons/fa";
const Navber = () => {
    return (


      <div className=" w-full ">
        <div className="navbar bg-base-100  flex justify-between container mx-auto items-center px-4 py-4">
                
  
     
    <div>
    <a className=" text-3xl font-bold text-[#4F39F6]">DigiTools</a>
  </div>
  <div className="navbar-center pl-90 hidden lg:flex">
    <ul className="menu menu-horizontal px-1 space-x-4">
      <li><a href="/products"></a>Products</li>
      <li><a href="/features"></a>Features</li>
      <li><a href="/pricing"></a>Pricing</li>
      <li><a href="/testimonials"></a>Testimonials</li>
      <li><a href="/faq"></a>FAQ</li>

    </ul>
  </div>
  <div className="navbar-end space-x-4">
  <FaShoppingCart size={20} className="rounded-full"></FaShoppingCart>
  <button>Login</button>
    <a className="btn rounded-full text-white bg-[#4F39F6]">Get Started</a>
  </div>
</div>
 
<hr className="border-b-2 border-gray-200"></hr>
</div>


        
    )
}
export default Navber;