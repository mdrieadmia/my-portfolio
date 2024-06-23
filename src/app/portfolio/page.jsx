"use client";
import Link from 'next/link';
import { FaExternalLinkAlt, FaExternalLinkSquareAlt } from "react-icons/fa";
import Medcamp from "../../../public/medcamp.jpg"
import Scribble from "../../../public/scribble.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
AOS.init();

const Page = () => {
    return (
        <div className="container mx-auto px-5">
            <div>
                <h1 className="text-2xl font-semibold text-center text-white py-10">Portfolio</h1>
            </div>
            <div className="pt-12 text-white flex gap-20 flex-col">
                <div className="flex gap-12">
                    <div data-aos-duration="1000" data-aos="fade-right" className='w-[30%]'>
                        <Image width={400} height={330} className="object-cover rounded-xl" src={Medcamp} alt="Medcamp Image" />
                    </div>
                    <div data-aos-duration="1000" data-aos="fade-left" className='w-[70%]'>
                        <div className='flex items-center gap-4'>
                            <h2 className="text-2xl font-semibold">Medcamp</h2>
                            <p className='text-lg font-medium'>(Medical Camp Website)</p>
                            <div className='flex text-blue-200 gap-7 ml-7'>
                                <Link href="https://medcamp.netlify.app" target="_blank">
                                    <p className="inline-flex  items-center hover:text-red-500 duration-200">Live Site <FaExternalLinkSquareAlt className="mb-[2px] ml-2" /></p>
                                </Link>
                                <Link href="https://github.com/programming-hero-web-course1/b9a12-client-side-mdrieadmia.git" target="_blank">
                                    <p className="inline-flex  items-center hover:text-red-500 duration-200">Client Code <FaExternalLinkSquareAlt className="mb-[2px] ml-2" /></p>
                                </Link>
                                <Link href="https://github.com/programming-hero-web-course1/b9a12-server-side-mdrieadmia.git" target="_blank">
                                    <p className="inline-flex  items-center hover:text-red-500 duration-200">Server Code <FaExternalLinkSquareAlt className="mb-[2px] ml-2" /></p>
                                </Link>
                            </div>
                        </div>
                        <p className='text-justify pt-5'>This camp management system features a dashboard for organizers to manage camps and participants, with CRUD operations to create, update, and delete camps. Participants can manage their camp participation and pay fees via the integrated Stripe payment gateway.The project utilizes React for the front-end, ExpressJS and NodeJS for the back-end, and MongoDB for the database. Firebase handles authentication, while Tailwind CSS ensures a responsive UI. JavaScript provides core functionality, and Recharts offers data visualization with insightful charts. This system enhances the experience for organizers and participants with its user-friendly interface and secure payment options.</p>
                        <p className='pt-2 font-semibold' >Technology Used : React, ExpressJS, NodeJS, MongoDB, Firebase, Tailwind, JavaScript, Stripe, Recharts.</p>
                    </div>
                </div>
                <div className="flex gap-12">
                    <div data-aos-duration="1000" data-aos="fade-right" className='w-[30%]'>
                        <Image  width={400} height={380} className="object-cover rounded-xl" src={Scribble} alt="Scribble Image" />
                    </div>
                    <div data-aos-duration="1000" data-aos="fade-left" className='w-[70%]'>
                        <div className='flex items-center gap-4'>
                            <h2 className="text-2xl font-semibold">Scribble</h2>
                            <p className='text-lg font-medium'>(Blog Website)</p>
                            <div className='flex text-blue-200 gap-7 ml-10'>
                                <Link href="https://scribblebd.netlify.app" target="_blank">
                                    <p className="inline-flex  items-center hover:text-red-500 duration-200">Live Site <FaExternalLinkSquareAlt className="mb-[2px] ml-2" /></p>
                                </Link>
                                <Link href="https://github.com/Porgramming-Hero-web-course/b9a11-client-side-mdrieadmia.git" target="_blank">
                                    <p className="inline-flex  items-center hover:text-red-500 duration-200">Client Code <FaExternalLinkSquareAlt className="mb-[2px] ml-2" /></p>
                                </Link>
                                <Link href="https://github.com/Porgramming-Hero-web-course/b9a11-server-side-mdrieadmia.git" target="_blank">
                                    <p className="inline-flex  items-center hover:text-red-500 duration-200">Server Code <FaExternalLinkSquareAlt className="mb-[2px] ml-2" /></p>
                                </Link>
                            </div>
                        </div>
                        <p className='text-justify pt-5'>Implemented user authentication to secure the website and manage user access effectively. Developed comprehensive CRUD operations, enabling users to create, read, update, and delete data entries seamlessly. Ensured the website features a fully responsive design, providing an optimal viewing experience across various devices and screen sizes. This approach not only enhances security but also improves functionality and user experience, making the platform robust and user-friendly. Through these features, the website delivers a secure, efficient, and accessible interface for all users, ensuring smooth operations and a satisfying user experience on any device.</p>
                        <p className='pt-2 font-semibold' >Technology Used : React, NodeJS, ExpressJS, MongoDB, JavaScript, Firebase, Tailwind, Flowbite.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
