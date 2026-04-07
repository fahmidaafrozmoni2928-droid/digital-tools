import React from "react";

const Cart = ({carts, setCarts}) => {
    return (
        <div>
            <h1 className="text-4xl font-bold">Your Cart</h1>
            {
                carts.map(cart => 
                    <div>
                        <div className="flex">
                        <a className="text-4xl">{cart.icon}</a>

                        <div className="">
                            <h1 className="text-2xl font-bold">{cart.name}</h1>
                            <p className="text-gray-600">${cart.price}</p>
                        </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
export default Cart;