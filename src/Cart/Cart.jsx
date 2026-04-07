import React from "react";

const Cart = ({carts, setCarts}) => {
    return (
        <div className="border mx-20 my-20 py-10 border-gray-300 rounded-lg">
            <h1 className="text-6xl font-bold container mx-auto pl-22">Your Cart</h1>
            <div className="space-y-4">
            {
                carts.map(cart =>
                    
                    <div className="">
                        <div className="flex gap-6 border border-[#A2DDFD]/10 mx-50 py-4 bg-[#A2DDFD]/10 rounded-lg">
                        <a className="text-4xl">{cart.icon}</a>

                        <div className="">
                            <h1 className="text-xl font-bold">{cart.name}</h1>
                            <p className="text-gray-600">${cart.price}</p>
                        </div>
                        <button className="btn text-red-400 justify-end ml-150">Remove</button>
                        </div>

                       

                    </div>
                    
                )
            }
            </div>
            <div className="flex justify-between">
                            <h3>Total</h3>
                            <p>$0</p>
                        </div>
            
        </div>
    )
}
export default Cart;