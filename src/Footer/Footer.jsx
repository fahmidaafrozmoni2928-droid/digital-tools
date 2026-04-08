import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
    return (
        <div className="bg-black px-30 mt-10 py-10">
        <div className=" text-white md:flex justify-between">
           <div className="space-y-3">
            <h2 className="text-3xl">DigiTools</h2>
            <p className="line-clamp-3 w-90 text-[#FFFFFF]/60">Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
            </div> 
<div className="flex justify-between pt-10">
            <div>
                <ul className="space-y-3">
                    <li><a href="/product"></a>Product</li>
                    <li className="text-[#FFFFFF]/60"><a href="/Features"></a>Features</li>
                    <li className="text-[#FFFFFF]/60"><a href="/Pricing"></a>Pricing</li>
                    <li className="text-[#FFFFFF]/60"><a href="/Templates"></a>Templates</li>
                    <li className="text-[#FFFFFF]/60"><a href="/Integrations"></a>Integrations</li>
                </ul>
            </div>


            <div>
                <ul className="space-y-3">
                    <li><a href="/Company"></a>Company</li>
                    <li className="text-[#FFFFFF]/60"><a href="/About"></a>About</li>
                    <li className="text-[#FFFFFF]/60"><a href="/Blog"></a>Blog</li>
                    <li className="text-[#FFFFFF]/60" ><a href="/Careers"></a>Careers</li>
                    <li className="text-[#FFFFFF]/60"><a href="/Press"></a>Press</li>
                </ul>
            </div>

            </div>

            <div className="flex justify-between pt-10">
            <div>
                <ul className="space-y-3">
                    <li><a href="/Resources"></a>Resources</li>
                    <li className="text-[#FFFFFF]/60"><a href="/Documentation"></a>Documentation</li>
                    <li className="text-[#FFFFFF]/60"><a href="/Help Center"></a>Help Center</li>
                    <li className="text-[#FFFFFF]/60"><a href="/Community"></a>Community</li>
                    <li className="text-[#FFFFFF]/60"><a href="/Contact"></a>Contact</li>
                </ul>
            </div>


            <div className="space-y-3">
                <h3>Social Links</h3>

                <div className="flex gap-4">
                <FaInstagram />
                <FaFacebook />
                <FaXTwitter />
                </div>
            </div>
            </div>

            </div>

            <hr className="px-20 border-t-2 border-[#FFFFFF]/20 my-4 w-full"></hr>
            <div className="gap-10 md:flex justify-between text-[#FFFFFF]/60">
            <p className="text-[#FFFFFF]/60">&copy;  2026 Digitools. All rights reserved.</p>

            <div className="flex gap-4">
                <p>Privacy Policy </p>
                <p>Terms of Service</p>
                <p> Cookies</p>
            </div>
            </div>

        </div>
    )
}
export default Footer;