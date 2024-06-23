"use client"
import { FaEnvelope } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { Button } from "@material-tailwind/react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import SocialIcons from "@/components/SocialIcons/SocialIcons";
AOS.init();


const page = () => {
    return (
        <div className="container mx-auto px-5 text-white h-full">
            <div>
                <h1 data-aos-duration="1000" data-aos="zoom-in-down" className="text-2xl font-semibold text-center text-white pt-10 pb-32">Contact</h1>
            </div>
            <div className="flex flex-col gap-10 md:flex-row item center h-full justify-center">
                <div className="flex gap-7 flex-col w-full">
                    <div data-aos-duration="1000" data-aos="fade-up" className="flex gap-2 item-center">
                        <IoLogoWhatsapp className="mt-1" />
                        <p>+8801863-931220</p>
                    </div>
                    <div data-aos-duration="1000" data-aos="fade-up" className="flex gap-2 item-center">
                        <FaEnvelope className="mt-1" />
                        <p>mdriead.bd@gmail.com</p>
                    </div>
                    <div data-aos-duration="1000" data-aos="fade-up" className="flex gap-2 item-center">
                        <IoCall className="mt-1" />
                        <p>+8801863-931220, +8801567-953483</p>
                    </div>
                    <div data-aos-duration="1000" data-aos="fade-up" className="flex gap-2 item-center">
                        <FaLocationDot className="mt-1" />
                        <p>Kondolbag, Zirabo, Ashulia, Savar, Dhaka</p>
                    </div>
                    <div data-aos-duration="1000" data-aos="fade-up" className="flex gap-2 item-center">
                        <SocialIcons/>
                    </div>
                </div>
                <div className="w-full">
                    <form className="grid grid-cols-2 gap-5">
                        <input data-aos-duration="1000" data-aos="fade-up" className="block px-3 py-2 w-full rounded-lg bg-gray-800" type="text" placeholder="First Name" />
                        <input data-aos-duration="1000" data-aos="fade-up" className="block px-3 py-2 w-full rounded-lg bg-gray-800" type="text" placeholder="Last Name" />
                        <input data-aos-duration="1000" data-aos="fade-up" className="block px-3 py-2 w-full rounded-lg bg-gray-800" type="text" placeholder="Phone Number" />
                        <input data-aos-duration="1000" data-aos="fade-up" className="block px-3 py-2 w-full rounded-lg bg-gray-800" type="text" placeholder="Subject" />
                        <input data-aos-duration="1000" data-aos="fade-up" className="block px-3 py-2 w-full rounded-lg bg-gray-800 col-span-2" type="email" placeholder="Email Address" />
                        <textarea data-aos-duration="1000" data-aos="fade-up" className="block px-3 py-2 w-full rounded-lg col-span-2 bg-gray-800" placeholder="Your Message" />
                        <div data-aos-duration="1000" data-aos="fade-up" className="flex col-span-2 justify-center item-center pt-5">
                            <Button className="bg-blue-300 normal-case">Send</Button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default page;