import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { toast } from "react-toastify";
const Cart = ({carts, setCarts}) => {

    const handleCheckoutBtn = () => {
        setCarts([]);
        toast.success("Proceeding to checkout...")
    }

    const handleRemoveBtn = (item) => {
        const filtered = carts.filter(c => item.id !== c.id );
        setCarts(filtered);
        toast.success("Product remove")
    }

    const totalCount = carts.reduce((sum, cart) => sum + cart.price, 0);
    return (
        <div className="border mx-20 my-20 py-10 border-gray-300 rounded-lg">
            <h1 className="text-6xl font-bold container mx-auto pl-22">Your Cart</h1>

            {
                carts.length === 0 ? (  <><div className="flex flex-col justify-center items-center"> <FaShoppingCart size={60} className="rounded-full "></FaShoppingCart>
                <p className="text-3xl font-bold text-center">Cart is empty</p></div> </> ) :
             (
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
                            <button onClick={()=> handleRemoveBtn(cart)} className="btn text-red-400 justify-end ml-150">Remove</button>
                            </div>
    
                           
    
                    </div>
                        
                    )
                }
                </div>
             )
            }
                 
          
                <div className="flex justify-between pt-10 mx-35">
                                <h3 className="text-gray-600">Total</h3>
                                <p className="font-bold text-2xl">${totalCount}</p>
                            </div>
                          <div className="px-20 py-10">
                            <button onClick={handleCheckoutBtn} className="btn  btn-block btn-primary rounded-full  ">Proceed To Checkout</button>
                            </div>
          
            
        </div>
    )
}
export default Cart;