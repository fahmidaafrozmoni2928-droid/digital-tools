import React from "react";
import { toast } from "react-toastify/unstyled";

const Card = ({tool, carts, setCarts}) => {
    const handleBuyNowButton = () => {

      const found = carts.find((cart) => cart.id === tool.id);
      if(found){
        toast.error("product already in cart!");
        return;
      }
        setCarts([...carts, tool]);
        toast.success("Product added successfully!");

        
    };
    
    
    return (
        <div className="card w-96 bg-base-100 shadow-sm space-y-4 ">
        <div className="card-body">
          <div className="flex justify-end">
          <span className="badge badge-xs badge-warning ">{tool.tag}</span>
          </div>
          <div className="flex justify-between">
            <a className="rounded-full text-4xl">{tool.icon}</a>
            
          </div>
      
          <div>
              <h2 className="text-3xl font-bold">{tool.name}</h2>
          </div>
      
          <p className="text-gray-600">{tool.description}</p>
        <div className="flex items-center">
          <span className="text-3xl font-bold">${tool.price}</span>/<p>{tool.period}</p>
          </div>
          <ul className="mt-6 flex flex-col gap-2 text-xs text-gray-600">
              {
                  tool.features.map(feature =>
                      <li>
                      <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                      <span className="">{feature}</span>
                    </li>
                  )
              }
           
             </ul>
          <div className="mt-6">
            <button onClick={ handleBuyNowButton} className="btn btn-primary btn-block rounded-full">Buy Now</button>
            
          </div>
        </div>
      </div>
    )
}
export default Card;