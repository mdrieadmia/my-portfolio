"use client"
import { FaGitAlt, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { RiJavascriptFill } from "react-icons/ri";
import { SiAdobeillustrator, SiAdobephotoshop, SiAntdesign, SiExpress, SiMongodb, SiMui, SiTailwindcss } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { BsStripe } from "react-icons/bs";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const page = () => {
    return (
        <div className="container mx-auto px-5">
            <div>
                <h1 data-aos-duration="1000" data-aos="fade-zoom-in" className="text-2xl font-semibold text-center text-white pt-10">My Skills</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-10 gap-5 text-white">
                <div data-aos-duration="1000" data-aos="fade-right" className="bg-gray-800 rounded-lg p-5">
                    <div className="flex justify-center">
                        <FaHtml5  className="text-5xl text-red-500"/>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold text-center mt-3">HTML - 5</h3>
                    </div>
                </div>
                <div data-aos-duration="1000" data-aos="fade-up" className="bg-gray-800 rounded-lg p-5">
                    <div className="flex justify-center">
                        <IoLogoCss3  className="text-5xl text-blue-400"/>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold text-center mt-3">CSS - 3</h3>
                    </div>
                </div>
                <div data-aos-duration="1000" data-aos="fade-up" className="bg-gray-800 rounded-lg p-5">
                    <div className="flex justify-center">
                        <SiTailwindcss  className="text-5xl text-blue-400"/>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold text-center mt-3">Tailwind CSS</h3>
                    </div>
                </div>
                <div data-aos-duration="1000" data-aos="fade-left" className="bg-gray-800 rounded-lg p-5">
                    <div className="flex justify-center">
                        <RiJavascriptFill  className="text-5xl text-yellow-500"/>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold text-center mt-3">Java Script</h3>
                    </div>
                </div>
                <div data-aos-duration="1000" data-aos="fade-right" className="bg-gray-800 rounded-lg p-5">
                    <div className="flex justify-center">
                        <FaReact  className="text-5xl text-blue-400"/>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold text-center mt-3">React JS</h3>
                    </div>
                </div>
                <div data-aos-duration="1000" data-aos="fade-up" className="bg-gray-800 rounded-lg p-5">
                    <div className="flex justify-center">
                        <FaNodeJs  className="text-5xl text-green-400"/>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold text-center mt-3">Node JS</h3>
                    </div>
                </div>
                <div data-aos-duration="1000" data-aos="fade-up" className="bg-gray-800 rounded-lg p-5">
                    <div className="flex justify-center">
                        <SiExpress  className="text-5xl text-black"/>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold text-center mt-3">Express JS</h3>
                    </div>
                </div>
                <div data-aos-duration="1000" data-aos="fade-left" className="bg-gray-800 rounded-lg p-5">
                    <div className="flex justify-center">
                        <SiMongodb  className="text-5xl text-green-400"/>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold text-center mt-3">Mongo DB</h3>
                    </div>
                </div>
                <div data-aos-duration="1000" data-aos="fade-right" className="bg-gray-800 rounded-lg p-5">
                    <div className="flex justify-center">
                        <IoLogoFirebase className="text-5xl text-orange-400"/>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold text-center mt-3">Firebase</h3>
                    </div>
                </div>
                <div data-aos-duration="1000" data-aos="fade-up" className="bg-gray-800 rounded-lg p-5">
                    <div className="flex justify-center">
                        <FaFigma  className="text-5xl text-red-400"/>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold text-center mt-3">Figma</h3>
                    </div>
                </div>
                <div data-aos-duration="1000" data-aos="fade-up" className="bg-gray-800 rounded-lg p-5">
                    <div className="flex justify-center">
                        <FaGitAlt  className="text-5xl text-orange-600"/>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold text-center mt-3">Git & Github</h3>
                    </div>
                </div>
                <div data-aos-duration="1000" data-aos="fade-left" className="bg-gray-800 rounded-lg p-5">
                    <div className="flex justify-center">
                        <SiMui className="text-5xl text-blue-500"/>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold text-center mt-3">Material UI</h3>
                    </div>
                </div>
                <div data-aos-duration="1000" data-aos="fade-right" className="bg-gray-800 rounded-lg p-5">
                    <div className="flex justify-center">
                        <SiAntdesign className="text-5xl text-orange-300"/>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold text-center mt-3">Ant Design</h3>
                    </div>
                </div>
                <div data-aos-duration="1000" data-aos="fade-up" className="bg-gray-800 rounded-lg p-5">
                    <div className="flex justify-center">
                        <BsStripe className="text-5xl text-blue-300"/>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold text-center mt-3">Stripe</h3>
                    </div>
                </div>
                <div data-aos-duration="1000" data-aos="fade-up" className="bg-gray-800 rounded-lg p-5">
                    <div className="flex justify-center">
                        <SiAdobephotoshop className="text-5xl text-blue-300"/>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold text-center mt-3">Adobe Photoshop</h3>
                    </div>
                </div>
                <div data-aos-duration="1000" data-aos="fade-left" className="bg-gray-800 rounded-lg p-5">
                    <div className="flex justify-center">
                        <SiAdobeillustrator className="text-5xl text-red-500"/>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold text-center mt-3">Adobe Illustrator</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
