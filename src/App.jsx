
import { Suspense, useState } from 'react';
import './App.css'
import Banner from './Banner/Banner'
import BannerBottom from './BannerBottom/BannerBottom'
import Navber from './Navber/Navber'
import ToolsCards from './ToolsCards/ToolsCards';
import Cart from './Cart/Cart';

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

    
       
     <Suspense fallback={<p>Data Loading</p>}>
    
     <ToolsCards toolsPromise={toolsPromise} carts={carts} setCarts={setCarts} activeTools={activeTools} setActiveTools={setActiveTools}>
      
     </ToolsCards>
      
     </Suspense>

  



    <GetStarted></GetStarted>
     <Pricing></Pricing>
      <Footer></Footer>
     <ToastContainer></ToastContainer>













 </>
  )
}

export default App
