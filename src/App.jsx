
import { Suspense, useState } from 'react';
import './App.css'
import Banner from './Banner/Banner'
import BannerBottom from './BannerBottom/BannerBottom'
import Navber from './Navber/Navber'
import ToolsCards from './ToolsCards/ToolsCards';
import Cart from './Cart/Cart';
//import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from 'react-toastify';
import GetStarted from './GetStarted/GetStarted';
import Pricing from './Pricing/Pricing';
import Footer from './Footer/Footer';


function App() {
  const toolsPromise = fetch("/tools.json").then(res => res.json());
  const [activeTools, setActiveTools] = useState("product");
  const [carts, setCarts] = useState([]);
  
  return (
    <>
      
     <Navber carts={carts} setCarts={setCarts}></Navber>
     <Banner></Banner> 
     <BannerBottom></BannerBottom> 

    {/* name of each tab group should be unique */}
    <div className="tabs tabs-box flex justify-center items-center space-x-4">
  <input type="radio" name="my_tabs_1" className="tab rounded-full text-white px-7 bg-[#4F39F6]" aria-label="Product" onClick={()=> setActiveTools("product")} defaultChecked />
  <input type="radio" name="my_tabs_1" className="tab rounded-full px-7 " aria-label={`Cart(${carts.length})`} onClick={()=> setActiveTools("cart")} />
  
</div>
       
     <Suspense fallback={<p>Data Loading</p>}>
     {activeTools === "product" &&
     <ToolsCards toolsPromise={toolsPromise} carts={carts} setCarts={setCarts}>
      
     </ToolsCards>}
      
     </Suspense>

  { activeTools === "cart" && <Cart carts={carts} setCarts={setCarts}></Cart> }



    <GetStarted></GetStarted>
     <Pricing></Pricing>
      <Footer></Footer>
     <ToastContainer></ToastContainer>













 </>
  )
}

export default App
