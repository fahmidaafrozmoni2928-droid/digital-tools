import React, { use } from "react";
import Card from "../Card/Card";
import Cart from "../Cart/Cart";

const ToolsCards = ({toolsPromise, carts, setCarts, activeTools, setActiveTools}) => {
    const tools = use(toolsPromise);
   // console.log(tools);
   
    return (
        <div className="pt-15 ">
            <div className="text-center space-y-5">
            <h2 className="text-6xl font-bold">Premium Digital Tools</h2>
            <p className="text-gray-600">Choose from our curated collection of premium digital products designed <br></br> to boost your productivity and creativity.</p>
            </div>
          
             {/* name of each tab group should be unique */}
    <div className="tabs tabs-box flex justify-center items-center space-x-4">
  <input type="radio" name="my_tabs_1" className="tab rounded-full text-white px-7 bg-[#4F39F6]" aria-label="Product" onClick={()=> setActiveTools("product")} defaultChecked />
  <input type="radio" name="my_tabs_1" className="tab rounded-full px-7 " aria-label={`Cart(${carts.length})`} onClick={()=> setActiveTools("cart")} />
  
</div>

{ activeTools === "cart" && <Cart carts={carts} setCarts={setCarts}></Cart> }
     {activeTools === "product" &&
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-6 gap-x-0 ">
                {
                    tools.map(tool => <div key={tool.id} className="min-h-100vh flex justify-center items-center ">
                            <Card key={tool.id} tool={tool} carts={carts} setCarts={setCarts}></Card>
                    </div>)
                }
            </div>}
        </div>
    )
}
export default ToolsCards;