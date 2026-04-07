import { Play } from "lucide-react";
import React from "react";
import bannerImg from '../assets/banner.png'

const Banner = () => {
    return (
        <div className="pt-10 container mx-auto space-x-19 flex">
            <div className="space-y-6">
           <div className="btn px-20 rounded-full"></div>

           <h1 className="text-5xl font-bold">Supercharge Your Digital <br></br> Workflow</h1>
           <p className="line-clamp-3 w-110 text-gray-600">Access premium AI tools, design assets, templates, and productivity
software—all in one place. Start creating faster today.

Explore Products
</p>
<div className="space-x-4">
<button className="btn rounded-full text-white bg-[#4F39F6]">Explore Products</button>
<button className="btn border-[#4F39F6] rounded-full text-[#4F39F6]"> <Play size={16} fill="currentColor"></Play> Watch Demo</button>
</div>
</div>

<div>
    <img className="w-130 h-130" src={bannerImg}></img>
</div>
        </div>

        
    )
}
export default Banner;